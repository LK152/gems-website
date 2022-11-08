const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { fileStorage, fileFilter } = require('../config/multer');
const prisma = require('../utilities/prisma');
const validateFolderId = require('../middleware/validateFolderId');

const upload = multer({
	storage: fileStorage,
	limits: { fileSize: 1024 * 1024 * 10 },
	fileFilter: fileFilter,
});

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		await prisma.image
			.findMany()
			.then((data) => {
				res.status(200).send(data);
			})
			.catch(() => {
				res.status(400).send('Bad request');
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		if (!req.params.id) throw new Error('No id specified');

		const id = req.params.id;

		await prisma.image
			.findUnique({
				where: { id: id },
			})
			.then((image) => res.status(200).send(image))
			.catch(() => {
				res.status(400).send('Bad request');
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.get('/folder/:id', validateFolderId, async (req, res) => {
	try {
		if (!req.params.id) throw new Error('No id specified');

		const id = req.params.id;

		await prisma.image
			.findMany({
				where: { folderId: id },
				orderBy: { order: 'asc' },
			})
			.then((data) => {
				res.status(200).send(data);
			})
			.catch(() => {
				res.status(400).send('Bad request');
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.post(
	'/folder/:id',
	validateFolderId,
	upload.array('image'),
	async (req, res) => {
		try {
			if (!req.params.id) throw new Error('No id specified');

			const id = req.params.id;

			const orderCount = await prisma.image.count({
				where: { folderId: id },
			});

			const payload = req.files?.map(
				({ filename, mimetype, size, path }, idx) => {
					return {
						fileName: filename,
						mimeType: mimetype,
						size: size,
						path: path,
						order: orderCount + idx,
					};
				}
			);

			await prisma.folder
				.upsert({
					where: { id: id },
					update: {
						id: id,
						images: {
							createMany: {
								data: payload,
								skipDuplicates: true,
							},
						},
					},
					create: {
						id: id,
						images: {
							createMany: {
								data: payload,
								skipDuplicates: true,
							},
						},
					},
				})
				.then(() => {
					res.status(201).send('Data record created');
				})
				.catch(() => {
					res.status(400).send('Bad request');
				});
		} catch (err) {
			res.status(400).send(err);
		}
	}
);

router.patch('/', async (req, res) => {
	try {
		if (!req.body) throw new Error('No body');

		req.body?.forEach(async (item) => {
			await prisma.image
				.update({ where: { id: item.id }, data: { order: item.order } })
				.catch(() => {
					res.status(400).send('Bad request');
				});
		});

		res.status(201).send('Data record patched');
	} catch (err) {
		res.status(400).send(err);
	}
});

router.delete('/', async (req, res) => {
	try {
		await prisma.folder.deleteMany().then(() => {
			fs.rmSync('public/images', { recursive: true, force: true });
			res.status(200).send('Bulk deleted');
		});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		if (!req.params.id) throw new Error('No id specified');

		const id = req.params.id;

		await prisma.image
			.findUnique({
				where: { id: id },
				select: { path: true },
			})
			.then(({ path }) => {
				fs.unlinkSync(path);
			});

		await prisma.image.delete({ where: { id: id } }).then(() => {
			res.status(200).send('Data record deleted');
		});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.delete('/folder/:id', async (req, res) => {
	try {
		if (!req.params.id) throw new Error('No id specified');

		const id = req.params.id;

		await prisma.image
			.findMany({
				where: { folderId: id },
				select: { path: true },
			})
			.then((paths) => {
				paths.forEach(({ path }) => {
					fs.unlinkSync(path);
				});
			});

		await prisma.folder.delete({ where: { id: id } }).then(() => {
			res.status(200).send('Data folder deleted');
		});
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;

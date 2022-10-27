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

router.get('/folder/:id', validateFolderId, async (req, res) => {
	try {
		await prisma.image
			.findMany({
				where: { folderId: req.params.id },
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
	'/:id',
	validateFolderId,
	upload.array('image'),
	async (req, res) => {
        console.log(req.body)
		try {
			let orderCount = 0;

			await prisma.image
				.count({
					where: {
						folderId: req.params.id,
					},
				})
				.then((count) => {
					orderCount = count;
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
					where: { id: req.params.id },
					update: {
						id: req.params.id,
						images: {
							createMany: {
								data: payload,
								skipDuplicates: true,
							},
						},
					},
					create: {
						id: req.params.id,
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

router.patch('/:id', async (req, res) => {
	try {
		await prisma.image;
	} catch (err) {
		res.status(400).send(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await prisma.image
			.findUnique({ where: { id: req.params.id } })
			.then((image) => {
				fs.unlinkSync(image.path);
			});

		await prisma.image.delete({ where: { id: req.params.id } }).then(() => {
			res.status(200).send('Data record deleted');
		});
	} catch (err) {
		res.status(400).send('Bad request');
	}
});

router.delete('/folder/:id', async (req, res) => {
	try {
		await prisma.folder
			.delete({ where: { id: req.params?.id } })
			.then(() => {
				res.status(200).send('Data folder deleted');
			});
	} catch (err) {
		res.status(400).send('Bad request');
	}
});

module.exports = router;

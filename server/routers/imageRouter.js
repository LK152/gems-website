const express = require('express');
const multer = require('multer');
const { fileStorage, fileFilter } = require('../config/multer');
const prisma = require('../prisma');
const validateFolderId = require('../middleware/validateFolderId');

const upload = multer({
	storage: fileStorage,
	limits: { fileSize: 1024 * 1024 * 10 },
	fileFilter: fileFilter,
});

const router = express.Router();

router.get('/folder/:id', async (req, res) => {
	try {
		await prisma.image
			.findMany({ where: { folderId: req.query?.id } })
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
		console.log(req.files);
		try {
			const payload = req.files?.map(
				({ filename, mimetype, size, path }) => {
					return {
						fileName: filename,
						mimeType: mimetype,
						size: size,
						path: path,
					};
				}
			);

			await prisma.folder
				.upsert({
					where: { id: req.params?.id },
					update: {
						id: req.params?.id,
						images: {
							createMany: {
								data: payload,
								skipDuplicates: true,
							},
						},
					},
					create: {
						id: req.params?.id,
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

router.delete('/id', async (req, res) => {
	try {
		await prisma.image
			.delete({ where: { id: req.params?.id } })
			.then(() => {
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

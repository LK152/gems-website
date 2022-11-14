const express = require('express');
const prisma = require('../utilities/prisma');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		await prisma.formData
			.findMany()
			.then((data) => {
				res.status(200).send(data);
			})
			.catch((err) => {
				res.status(400).json({ msg: 'Bad request', err: err });
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.get('/:id', async (req, res) => {
	if (!req.params.id) throw new Error('No id specified');

	const id = req.params.id;

	try {
		await prisma.formData
			.findUnique({ where: { id: id } })
			.then((data) => {
				res.status(200).send(data);
			})
			.catch((err) => {
				res.status(400).json({ msg: 'Bad request', err: err });
			});
	} catch (err) {
		res.status(404).send(err);
	}
});

router.post('/', async (req, res) => {
	try {
		await prisma.formData
			.create({ data: req.body })
			.then(() => {
				res.status(201).send('Form created');
			})
			.catch((err) => {
				res.status(400).json({ msg: 'Bad request', err: err });
			});
		console.log(req.body);
	} catch (err) {
		res.status(400).send(err);
	}
});

router.delete('/', async (req, res) => {
	try {
		await prisma.formData
			.deleteMany()
			.then(() => {
				res.status(201).send('Bulk deleted');
			})
			.catch((err) => {
				res.status(400).json({ msg: 'Bad request', err: err });
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.delete('/:id', async (req, res) => {
	if (!req.params.id) throw new Error('No id specified');

	const id = req.params.id;

	try {
		await prisma.formData
			.delete({ where: { id: id } })
			.then(() => {
				res.status(200).send('Form deleted');
			})
			.catch((err) => {
				res.status(400).json({ msg: 'Bad request', err: err });
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;

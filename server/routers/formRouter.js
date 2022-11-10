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

router.get('/:id', async (req, res) => {});

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

module.exports = router;

import nextConnect from 'next-connect';
import prisma from '@config/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

interface deleteRequest extends NextApiRequest {
	query: {
		id: string;
	};
}

const deleteApi = nextConnect<deleteRequest, NextApiResponse>({
	onError: (err, req, res) => res.status(501).send(err.message),
	onNoMatch: (req, res) =>
		res.status(405).send(`Method ${req.method} not allowed`),
});

deleteApi.delete(async (req, res) => {
	if (!req.query.id) res.status(400).send('Bad request');

	const image = await prisma.image.findUnique({
		where: {
			id: req.query?.id,
		},
		select: { path: true },
	});

	if (image) {
		fs.unlink(image.path, (err) => {
			if (err) throw err;
		});
	} else {
		res.status(410).send('Nothing');
	}

	await prisma.image
		.delete({
			where: {
				id: req.query?.id,
			},
		})
		.then(() => {
			res.status(200).send('Image deleted');
		})
		.catch(() => {
			res.status(400).send('Bad request');
		});
});

export default deleteApi;

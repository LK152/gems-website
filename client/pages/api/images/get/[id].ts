import nextConnect from 'next-connect';
import prisma from '@config/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

interface getRequest extends NextApiRequest {
	query: {
		id: string;
	};
}

const getApi = nextConnect<getRequest, NextApiResponse>({
	onError: (err, req, res) => res.status(501).send(err.message),
	onNoMatch: (req, res) =>
		res.status(405).send(`Method ${req.method} not allowed`),
});

getApi.get(async (req, res) => {
	if (!req.query.id) res.status(400).send('Bad request');

	await prisma.image
		.findUnique({
			where: {
				id: req.query?.id,
			},
		})
		.then((data) => {
			res.status(200).send(data);
		})
		.catch(() => {
			res.status(400).send('Bad request');
		});
});

export default getApi;

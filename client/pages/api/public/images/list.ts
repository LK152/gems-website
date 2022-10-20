import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@config/prisma';
import nextConnect from 'next-connect';

const listApi = nextConnect<NextApiRequest, NextApiResponse>({
	onError: (err, req, res) => res.status(501).send(err.message),
	onNoMatch: (req, res) =>
		res.status(405).send(`Method ${req.method} not allowed`),
});

listApi.get(async (req: NextApiRequest, res: NextApiResponse) => {
	await prisma.image
		.findMany()
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
});

export default listApi;

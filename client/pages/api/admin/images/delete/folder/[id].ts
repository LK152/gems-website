import prisma from '@config/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
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

	const paths = await prisma.image.findMany({
		where: {
			folderId: req.query?.id,
		},
		select: {
			path: true,
		},
	});

	if (paths.length == 0) res.status(410).send('Nothing');

	paths.map(({ path }) => {
		fs.unlink(path, (err) => {
			if (err) throw err;
		});
	});

	await prisma.folder
		.delete({
			where: { id: req.query.id },
		})
		.then(() => {
			res.status(200).send('Folder deleted');
		})
		.catch(() => {
			res.status(400).send('Bad request');
		});
});

export default deleteApi;

import multer, { FileFilterCallback } from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import fs from 'fs';
import prisma from '@config/prisma';
import validate from '@middleware/validateFolderId';

const storage: multer.StorageEngine = multer.diskStorage({
	destination: (req: Express.Request, file: Express.Multer.File, cb) => {
		const path = 'public/uploads';
		fs.mkdirSync(path, { recursive: true });
		cb(null, path);
	},
	filename: (req: Express.Request, file: Express.Multer.File, cb) =>
		cb(null, file.originalname),
});

const fileFilter = (
	req: Express.Request,
	file: Express.Multer.File,
	cb: FileFilterCallback
) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(new Error('Wrong file Format'));
	}
};

const upload: multer.Multer = multer({
	storage: storage,
	limits: { fileSize: 1024 * 1024 * 20 },
	fileFilter: fileFilter,
});

interface multerReq extends NextApiRequest {
	files: Express.Multer.File[];
	query: {
		id: string;
	};
}

const createApi = nextConnect<multerReq, NextApiResponse>({
	onError: (err, req, res) => res.status(501).send(err.message),
	onNoMatch: (req, res) =>
		res.status(405).send(`Method ${req.method} not allowed`),
});

createApi.post(validate, upload.array('image'), async (req, res) => {
	if (!req.query.id) res.status(400).send('Bad request');

	const payload = req?.files.map(({ filename, mimetype, size, path }) => {
		return {
			fileName: filename,
			mimeType: mimetype,
			size: size,
			path: path,
		};
	});

	await prisma.folder
		.upsert({
			where: {
				id: req.query?.id,
			},
			update: {
				id: req.query?.id,
				images: {
					createMany: {
						data: payload,
						skipDuplicates: true,
					},
				},
			},
			create: {
				id: req.query?.id,
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
});

export default createApi;

export const config = {
	api: {
		bodyParser: false,
	},
};

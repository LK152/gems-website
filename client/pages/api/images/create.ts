import multer, { FileFilterCallback } from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
}

const apiRoute = nextConnect<multerReq, NextApiResponse>({
	onError: (err, req, res) => res.status(501).send(err.message),
	onNoMatch: (req, res) =>
		res.status(405).send(`Method ${req.method} not allowed`),
});

apiRoute.use(upload.array('image'));

apiRoute.post(async (req, res) => {

	res.status(200).send('Success');
});

export default apiRoute;

export const config = {
	api: {
		bodyParser: false,
	},
};

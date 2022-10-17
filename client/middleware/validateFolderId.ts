import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import { z } from 'zod';

enum folderIds {
	homeSlider = 'homeSlider',
	homeGallery = 'homeGallery',
}

const folderEnum = z.nativeEnum(folderIds);
type folderEnum = z.infer<typeof folderEnum>;

interface multerReq extends NextApiRequest {
	files: Express.Multer.File[];
	query: {
		id: string;
	};
}

const validate = (req: multerReq, res: NextApiResponse, next: NextHandler) => {
	if (!folderEnum.safeParse(req.query?.id).success) {
		res.status(406).send('Wrong parameter');
	}

	next();
};

export default validate;

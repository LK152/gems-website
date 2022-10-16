import conn from '@config/mysql';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const response = await prisma.folder.findMany()

    res.status(200).send(response)
};

import { google } from 'googleapis';
import auth from '@utilities/createJWT';
import { NextApiRequest, NextApiResponse } from 'next';

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const drive = google.drive({ version: 'v3', auth });
		const files: string[] = [];
		const response = await drive.files.list({
			q: `'${req.query.query}' in parents`,
			fields: 'nextPageToken, files(id)',
			spaces: 'drive',
		});

		response.data.files?.forEach((file) => {
			if (file.id) {
				files.push(file.id);
			}
		});

		res.status(200).json(files);
	} catch (err) {
		res.status(400).json(err);
	}
};

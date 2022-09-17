const { google } = require('googleapis');
import auth from '@utilities/createJWT';
import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const drive = google.drive('v3');

		await drive.files
			.list({
				auth: auth,
				q: "mimeType='image/jpeg' or mimeType='image/png' and '1m92tHyS5Rs3OpWOLnVfF3IuCZZf8kaRP' in parents",
				fields: 'files(id, name)',
				spaces: 'drive',
			})
			.then((response: AxiosResponse) => {
				const imageURL: string[] = [];

				response.data.files.forEach((file: driveFileMetadataType) => {
					imageURL.push(file.id);
				});

				res.status(200).json(imageURL);
			});
	} catch (err) {
		res.status(400).json(err);
	}
};

const { google } = require('googleapis');
import JWTClient from '@utilities/createJWT';

//eslint-disable-next-line
export default async (req, res) => {
	try {
		const drive = google.drive('v3');

		await drive.files
			.list({
				auth: JWTClient,
				q: `mimeType='image/jpeg' or mimeType='image/png' and 1m92tHyS5Rs3OpWOLnVfF3IuCZZf8kaRP in parents`,
				fields: 'files(id, name)',
				spaces: 'drive',
			})
			.then((response) => {
				const imageURL = [];

				response.data.files.forEach((url) => {
					imageURL.push(url.id);
				});

				res.stauts(200).json(imageURL);
			});
	} catch (err) {
		res.status(400).json(err);
	}
};

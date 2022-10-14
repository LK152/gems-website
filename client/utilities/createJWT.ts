import { google } from 'googleapis';

const auth = new google.auth.JWT({
	email: process.env.SERVICE_ACCOUNT,
	keyFile: 'key.pem',
	scopes: ['https://www.googleapis.com/auth/drive'],
});

auth.authorize((err, token) => {
	if (err) {
		throw err;
	}
});

export default auth;

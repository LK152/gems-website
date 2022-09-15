const { google } = require('googleapis');

const JWTClient = new google.auth.JWT(
	process.env.SERVICE_ACCOUNT,
	null,
	process.env.PRIVATE_KEY,
	['https://www.googleapis.com/auth/drive'],
	null
);

JWTClient.authorize((err, tokens) => {
	if (err) {
		console.log(err);
		return;
	}
});

export default JWTClient;

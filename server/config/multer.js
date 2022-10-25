const multer = require('multer');
const fs = require('fs');

exports.fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (!fs.existsSync('uploads/')) fs.mkdirSync('uploads/');
		cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

exports.fileFilter = (req, file, cb) => {
	if (
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg' ||
		file.mimetype === 'image/jpeg'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const express = require('express')
const router = express.Router();
const imageControllers = require('../controllers/imageUploads');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/');
	},
	filename: (req, file, cb) => {
		cb(
			null,
			`${new Date().toISOString().split('T')[0]}-${file.originalname}`
		);
	},
});
const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(new Error('File not supported'), false);
	}
};
const upload = multer({
	storage: storage,
	limits: { fileSize: 1024 * 1024 * 10 },
	fileFilter: fileFilter,
});

router
	.route('/')
	.get(imageControllers.getAllPaths)
	.post(upload.array('image'), imageControllers.createImagePath);

router
	.route('/:id')
	.get(imageControllers.getImagePath)
	.patch(imageControllers.updateImagePath)
	.delete(imageControllers.deleteImagePath);

module.exports = router;

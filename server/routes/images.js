const express = require('express');
const router = express.Router();
const fs = require('fs');
const imageControllers = require('../controllers/images/imageUploads');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const path = `uploads/${req.params?.id}/`;
		fs.mkdirSync(path, { recursive: true });
		cb(null, path);
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
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

router.get('/', imageControllers.getAllPaths);

router
	.route('/:id')
	.get(imageControllers.getImagePath)
	.post(upload.array('image'), imageControllers.createImagePath)
	.patch(imageControllers.updateImagePath)
	.delete(imageControllers.deleteImagePath);

module.exports = router;

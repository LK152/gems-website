const folderIds = ['homeSlider', 'homeGallery'];

const validate = (req, res, next) => {
	if (folderIds.includes(req.params?.id)) {
		next();
	} else {
		res.status(400).send('Bad request');
	}
};

module.exports = validate;

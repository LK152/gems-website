const folderIds = ['homeSlider', 'homeGallery', 'teachers'];

const validate = (req, res, next) => {
	if (folderIds.includes(req.params?.id)) {
		next();
	} else {
		res.status(400).send('Wrong uri');
	}
};

module.exports = validate;

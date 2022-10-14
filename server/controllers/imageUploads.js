const AppError = require('../utils/appError');
const conn = require('../services/database');

const sqlQueries = {
	list: 'SELECT * FROM imagePaths',
	get: 'SELECT * FROM imagePaths WHERE fileName=?',
	post: 'INSERT INTO imagePaths (fileName, originalName, mimeType, path, size) VALUES',
	patch: 'UPDATE imagePaths SET path=? WHERE id=?',
	delete: 'DELETE FROM imagePaths WHERE id=?',
};

exports.getAllPaths = (req, res, next) => {
	conn.query(sqlQueries.list, (err, data, fields) => {
		if (err) return next(new AppError(err));

		console.log(data);
		res.status(200).json({
			status: 'success',
			length: data?.length,
			data: data,
		});
	});
};

exports.createImagePath = (req, res, next) => {
	console.log(req);
	if (!req.files) return next(new AppError('No image(s) included', 404));

	const payload = req.files.map(
		({ filename, originalname, mimetype, path, size }) =>
			`(${filename}, ${originalname}, ${mimetype}, ${path}, ${size})`
	);
	console.log(payload);

	conn.query(sqlQueries.post + payload, (err, data, fields) => {
		if (err) return next(new AppError(err, 500));

		res.status(201).json({
			status: 'success',
			message: 'path created',
		});
	});
};

exports.getImagePath = (req, res, next) => {
	if (!req.params.id) return next(new AppError('No image path found', 404));

	conn.query(sqlQueries.get, [req.params.id], (err, data, fields) => {
		if (err) return next(new AppError(err, 500));

		res.status(200).json({
			status: 'success',
			length: data?.length,
			data: data,
		});
	});
};

exports.updateImagePath = (req, res, next) => {
	if (!req.params.id) return next(new AppError('No image path found', 404));

	conn.query(
		sqlQueries.patch,
		[req.body.path, req.params.id],
		(err, data, fields) => {
			if (err) return next(new AppError(err, 500));

			res.status(201).json({
				status: 'success',
				message: 'path updated',
			});
		}
	);
};

exports.deleteImagePath = (req, res, next) => {
	if (!req.params.id) return next(new AppError('No image path found', 404));

	conn.query(sqlQueries.delete, [req.params.id], (err, data, fields) => {
		if (err) return next(new AppError(err, 500));

		res.status(201).json({
			status: 'success',
			message: 'path deleted',
		});
	});
};

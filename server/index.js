require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const AppError = require('./utils/appError');
const errorHandler = require('./utils/errorHandler');
const db = require('./services/database');

//Router Imports
const homeRouter = require('./routes');
const imagesRouter = require('./routes/images');

app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use('/', homeRouter);
app.use('/images', imagesRouter);

app.all('*', (req, res, next) => {
	next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
});

require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const imageRouter = require('./routers/imageRouter');

const app = express();

app.use(express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use('/images', imageRouter);

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
});
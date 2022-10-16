import mysql from 'serverless-mysql';
import fs from 'fs';
import path from 'path';
const createImagePathsTable = fs.readFileSync(
	path.join(__dirname, './imagePathsTable.sql'),
	'utf8'
);

const conn = mysql({
	config: {
		host: 'localhost',
		user: 'root',
		password: '10889',
		database: 'mysql',
	},
})

export default conn
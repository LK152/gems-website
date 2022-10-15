const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const createImagePathsTable = fs.readFileSync(
	path.join(__dirname, './sql/imagePathsTable.sql'),
	'utf8'
);

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '10889',
	database: 'mysql',
});

conn.connect((err) => {
	if (err) throw err;

	conn.query(createImagePathsTable, (err, data, fields) => {
		if (err) throw err;
	});
});

module.exports = conn;

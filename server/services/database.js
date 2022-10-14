const mysql = require('mysql');
const createImagePathsTable =
	'CREATE TABLE IF NOT EXISTS imagePaths (fileName varchar(100) NOT NULL, originalName varchar(100) NOT NULL, mimeType varchar(100) NOT NULL, path varchar(100) NOT NULL, size int NOT NULL, UNIQUE(fileName, path))';

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

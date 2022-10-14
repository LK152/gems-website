const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '90134',
	database: 'gems',
});

conn.connect((err) => {
	if (err) throw err;
});

module.exports = conn;

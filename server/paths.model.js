const sql = require('./services/database');

const paths = (newPath, result) => {
    sql.query("INSERT INTO paths SET ?", newPath, (err, res) => {
        if (err) {
            throw err;
        }

        console.log('Created path: ', {id: res.insertId})
    })
}
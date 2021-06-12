const mysql = require('mysql');

module.exports = (datos) => {
    return mysql.createConnection({
        host: datos["host"],
        user: datos["user"],
        password: datos["passwd"],
        database: datos["db"]
    });
}
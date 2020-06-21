'use strict';

const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'nadia',
    user: 'root',
    password: '',
});

db.connect(function (err) {
    if (err) throw err;
});

module.exports = db;
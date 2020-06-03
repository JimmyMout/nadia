'use strict';
let sql = require('./db.mysql.js');

exports.getTaskById = function (taskId, result) {
    // sql.query("SELECT task FROM tasks WHERE id = ? ", taskId, function (err, res) {
    //     if (err) {
    //        // console.log("error: ", err);
    //         result(err, null);
    //     }
    //     else {
    //         result(null, res);
    //     }
    // });
};

exports.getAllTasks = function (result) {
    // sql.query("SELECT * FROM tasks", function (err, res) {
    //     if (err) {
    //         console.log("error: ", err);
    //         result(null, err);
    //     }
    //     else {
    //         // console.log('tasks : ', res);

    //         result(null, res);
    //     }
    // });
};
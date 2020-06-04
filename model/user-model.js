'use strict';

let sql = require('./db.mysql.js');

exports.getUserByUsername = function (username, result){
        console.log("ektelw query");
        sql.query("SELECT * FROM user WHERE username = ? ", username, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log("afto epestrepse h bash: ",res);
            console.log("afto einai to res[0]: ",res[0]);

            result(null, res[0]);
            
        }
    });
}
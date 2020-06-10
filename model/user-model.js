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

exports.User = function (Newonoma, Newepwnymo, Newemail, Newusername, Newpassword, Newxwra, Newonoma_addr, Newarithmos_addr, Newtk, Newuserid = '', Newpoints = 200) {
    this.onoma = Newonoma;
    this.epwnymo = Newepwnymo;
    this.email = Newemail;
    this.username = Newusername;
    this.password = Newpassword;
    this.xwra = Newxwra;
    this.onoma_addr = Newonoma_addr;
    this.arithmos_addr = Newarithmos_addr;
    this.tk = Newtk;
    this.points = Newpoints;
    this.userid = Newuserid;
}
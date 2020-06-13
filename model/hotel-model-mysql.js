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
var reservedRooms ;
var allRooms ;

exports.getStoixeiaKrathshs = function(id,result){
    let stoixeia = []; // id pelath , start date , end date , desmefseis 

    sql.query("select id_pelath,start_date,end_date,atoma from krathsh where id = ?",id,(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            res = JSON.parse(JSON.stringify(res));
            for(let i of res){
                stoixeia.push(i);
            }
        }
sql.query("SELECT dwmatia.id_kathgorias_dwm, desmefsh_dwmatioy.id_kathgorias,desmefsh_dwmatioy.plhthos_dwmatiwn,dwmatia.xwrhtikothta FROM krathsh,desmefsh_dwmatioy,dwmatia WHERE krathsh.id = ? AND krathsh.id = desmefsh_dwmatioy.id_krathshs AND desmefsh_dwmatioy.id_kathgorias = dwmatia.kathgoria", id,
    (err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            res = JSON.parse(JSON.stringify(res));
            for(let i of res){

                stoixeia.push(i);
            }
        }
        console.log("AFTA BRHKE H BSH STHN TROPOPOIHSH KRATHSHS" , stoixeia);
        result(null,stoixeia);

    });

    });

    

   
}

exports.findKrathshByUserid = function(startd,endd,userid,result) {
    console.log(startd,endd,userid);
    sql.query("SELECT * FROM krathsh WHERE start_date <= ? AND end_date>= ? AND id_pelath = ?",[endd,startd,userid],
    (err,res)=>{
        if(err){
            console.log(err);
            
        }
        else{
            console.log("afto brhke h bash",res);
            let send ;
            if(res.length == 0 ){
                send=false;
            }
            else{ 
                send = true;
            }
            result(null,send);
        }
    })

}

exports.getAvailableRooms = function(start,end,result){
    var reservedRooms ;
    var allRooms ;
    console.log(start,end);
    sql.query("SELECT desmefsh_dwmatioy.id_kathgorias, SUM(desmefsh_dwmatioy.plhthos_dwmatiwn) AS sumr FROM krathsh, desmefsh_dwmatioy WHERE krathsh.id = desmefsh_dwmatioy.id_krathshs AND start_date <= ? AND end_date>= ? GROUP BY desmefsh_dwmatioy.id_kathgorias",[end,start], function (err, res){
        if(err){
            console.log("error: ",err);
            result(err,null);
        }
        else {
            // res periexei ta piasmena dwmatia gia ekeines tis hmeromoynies 
            //console.log("afto epestrepse h bash kai stelnei ston controller", res);
            JSON.parse(JSON.stringify(res));
            reservedRooms = JSON.parse(JSON.stringify(res));
           // console.log( reservedRooms);

           // result(null, res);

        //   sql.query("INSERT INTO `user` (`userid`, `username`, `onoma`, `epwnymo`, `points`, `email`, `password`, `xwra`, `onoma_addr`, `arithmos_addr`, `tk`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",[req.query.onoma,...],()=>{})
       
        sql.query("SELECT * FROM `dwmatia`",function (err,res){
                if(err){
                console.log("error: ",err);
                result(err,null);

                }
                else{
                    //console.log("ola ta dwmatia ",res );
                    allRooms = JSON.parse(JSON.stringify(res));
                    //console.log("ola ta dwmatia meta apo jsonParse ",allRooms );


                
            //console.log(allRooms);

            // edw afairoume apo ta synolika dwmatia ta piasmena gia ekeines tis hmeromhnies
            for (let i of allRooms){
                for(let j of reservedRooms){
                    if(i.kathgoria == j.id_kathgorias){
                        i.plhthos -= j.sumr ;
                    }
                }
            }

            console.log(allRooms);

            result(null,allRooms);


        }});
        }});
        }

exports.findUserById = function(userId,result)  {

    sql.query("select * from user where userid = ?",userId,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null)
        }
        else{
            result(null,JSON.parse(JSON.stringify(res)));
        }
    })
}

exports.kataxwrhseKrathsh = function(krathsh,desmefseis){
    krathsh = krathsh.split(',');
    console.log("afth h krathsh ftanei sthn bash ",krathsh);

    desmefseis= desmefseis.split(',');
    desmefseis.pop();
    console.log("aftes oi desmefseis ftanoun sthn bash", desmefseis);

    sql.query("INSERT INTO `krathsh` (`id`, `id_pelath`, `kwdikos`, `start_date`, `end_date`, `kostos`, `katastash`, `tropos_plhrwmhs`,atoma, points) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?);",krathsh,(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("EGINE EPITYXWS H KRATHSH",res,res.insertId);

            for(let i of desmefseis){
                let j=i.split(':');
                console.log("afto grafw sthn bash",[res.insertId,j[0],j[1]])
                sql.query('INSERT INTO `desmefsh_dwmatioy`(`id_krathshs`, `id_kathgorias`, `plhthos_dwmatiwn`) VALUES (?,?,?)',[res.insertId,j[0],j[1]],(err,res)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("EGINE EGGRAFH DESMEFSHS_DWMATIOU");
                    }
                })
            }

        }
    })
}

exports.updateKrathshs = function(krathsh,desmefseis){
    krathsh = krathsh.split(',');
    krathsh.push(krathsh[0]);
    let krathsh_id = krathsh[0] ;
    console.log("afth h krathsh ftanei sthn bash ",krathsh);

    desmefseis= desmefseis.split(',');
    desmefseis.pop();
    console.log("aftes oi desmefseis ftanoun sthn bash", desmefseis);

    sql.query("UPDATE `krathsh` SET `id`=?,`id_pelath`=?,`kwdikos`=?,`start_date`=?,`end_date`=?,`kostos`=?,`katastash`=?,`tropos_plhrwmhs`=?,`atoma`=? ,`points`=?  WHERE id= ?",krathsh,(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("EGINE EPITYXWS H KRATHSH",res,res.insertId);

            sql.query("DELETE FROM `desmefsh_dwmatioy` WHERE id_krathshs= ?",krathsh_id,(err,res)=>{
                if(err){
                    console.log(err);
                    
                }
                else{
                    console.log("EGINE TO DELETE KANONIKA");

                }});
                    for(let i of desmefseis){
                        let j=i.split(':');
                        console.log("afto grafw sthn bash",[krathsh_id,j[0],j[1]]);
                        sql.query('INSERT INTO `desmefsh_dwmatioy`(`id_krathshs`, `id_kathgorias`, `plhthos_dwmatiwn`) VALUES (?,?,?)',[krathsh_id,j[0],j[1]],(err,res)=>{
                            if(err){
                                console.log(err);
                            }
                            else{
                                console.log("EGINE EGGRAFH DESMEFSHS_DWMATIOU");
                            }
                        })
                    }
                }

    })
}





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




// ~~~~~~~~~~~~~~~~~~~~~~ STEFANOSSS ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
'use strict';




exports.putInBase = function (newUser, result){
    console.log("ektelw xreh nekrothafth");
    console.log(newUser);
        sql.query("INSERT INTO user( userid, username, onoma, epwnymo, points, email, password, xwra, polh, onoma_addr, arithmos_addr, tk) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",[newUser.userid, newUser.username, newUser.onoma, newUser.epwnymo, newUser.points, newUser.email, newUser.password, newUser.xwra, newUser.polh, newUser.onoma_addr, newUser.arithmos_addr, newUser.tk], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        
    });
}

// εμφάνιση στον χρήστη το ιστορικό
exports.getAllKrathseis = function (id_pelath,result) {
    sql.query("SELECT * FROM krathsh WHERE id_pelath = ? ",id_pelath, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, JSON.parse(JSON.stringify(res)));
            // console.log(res);
        }
    });
};

exports.upgradeKatastash = function (id_krathshs,result) {
    console.log("KANW UPDATE THN KRATHSH ",id_krathshs );
    sql.query("UPDATE `krathsh` SET `katastash` = 0 WHERE `id` = ?;",id_krathshs, function (err, res){
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
    });
};

// Ακύρωση της κράτησης
exports.akurwshKrat = function (kratId,result) {
    sql.query("DELETE FROM krathsh WHERE id = ?", kratId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } 
    });
};
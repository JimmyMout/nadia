'use strict';

const availableRooms = [];
let db = require('../model/hotel-model-mysql');



exports.findRooms = function (req, res1) {
    console.log("EFTASAAAAAAAAAAAA" , req.query.startd ,req.query.endd );
// sto req.body yparxoyn osa symplhrwnei o xrhsths sthn forma krathsh1.hbs
// 

// 1) Pairnei apo thn bash ta available rooms tis hmeromhnies pou ebale o user sto form
// kai ta apothikeyei sto array 


// sql query gia kateilhmena dwmatia tis zhtoumenes hmeromhnies 
// SELECT desmefsh_dwmatioy.id_kathgorias, SUM(desmefsh_dwmatioy.plhthos_dwmatiwn) FROM krathsh, desmefsh_dwmatioy WHERE krathsh.id = desmefsh_dwmatioy.id_krathshs GROUP BY desmefsh_dwmatioy.id_kathgorias
//

db.getAvailableRooms(req.query.startd ,req.query.endd ,(err,res)=>{
    if(err){
        console.log("egine sfalma sthn getRooms", err);
    }
    else {
        console.log("afto epestrepse h getRooms", res);
        res1.status(200).json({ rooms: res });
    }


}) ;

}


exports.krathsh2Render = function (req, res) {

req.session.atoma = Number(req.body.adults) + Number(req.body.kids) ;
req.session.startd = req.body.tripStart ;
req.session.endd = req.body.tripEnd ;


res.redirect("/krathsh2");
// 2) Pernaei sto session - locals times pou tha tis xrhsimopoihsei h selida krathsh2.hbs sto 
// drop-down menu ths ws epikefalides
}

exports.krathsh3 = function(req,res) {
    console.log("AFTA FTANOUN APO KRATHSH 2 SE CONTROLLER",req.body.kathgories);
    console.log(req.body.posa_dwmatia);
    console.log(req.body.kostos);

    let kathgories = req.body.kathgories.split(',') ;
    let epilegmenes_kathgories= [];

    let dwmatia = req.body.posa_dwmatia.split(',') ;
    let epilegmena_dwmatia=[] ;

    let kosth = req.body.kostos.split(',');
    let epilegmena_kosth=[] ;

    console.log("ETSI GINONTAI META TA SPLIT MESA STO CONTROLLER KRATHSH3",kathgories,dwmatia,kosth);
    
    for(let i in dwmatia){
        console.log(dwmatia[i],0,'0');
        if(dwmatia[i] != "0"){
            epilegmenes_kathgories.push(kathgories[i]);
            epilegmena_dwmatia.push(dwmatia[i]);
            epilegmena_kosth.push(kosth[i])
        }
    }


    epilegmenes_kathgories.pop();
    epilegmena_dwmatia.pop();
    epilegmena_kosth.pop();

    console.log(epilegmenes_kathgories);
    console.log(epilegmena_dwmatia);
    console.log(epilegmena_kosth);

    req.session.epil_kathgories = epilegmenes_kathgories.join(',')
    req.session.epil_dwmatia = epilegmena_dwmatia.join(',');
    req.session.epil_kosth = epilegmena_kosth.join(',');

    console.log(typeof(req.session.epil_kathgories ));
    req.session.epil_kathgories = req.session.epil_kathgories.replace(/ /g, "_");

    console.log( "AFTA PERNANE STA LOCALS",req.session.epil_kathgories,req.session.epil_dwmatia,req.session.epil_kosth);
    
    res.redirect('/krathsh3');

}

exports.kataxwrhseKrathsh = function(req,res){
    console.log(req.body.attr_krathshs);
    console.log(req.body.dwmatia_desmefsh);

    db.kataxwrhseKrathsh(req.body.attr_krathshs,req.body.dwmatia_desmefsh.replace(/_/g, " "))

    res.redirect('/index');
}


 exports.findUserById = function(req,res){
     console.log("to userId einai ",req.query.user);

     db.findUserById(req.query.user,(err,user)=>{
         if(err){
             console.log("error: ",err);
         }
         else{
             console.log(user);
             res.status(201).json({user:user});
         }
     })

 }




// na kaleitai me fetch synarthsh poy na stelnei ta available rooms ston kwdika ths krathsh2.hbs
// wste meta na ginontai div kai na emfanizontai ston xrhsth 
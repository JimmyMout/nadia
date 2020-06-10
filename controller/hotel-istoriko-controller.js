'use strict';

const model = require('../model/hotel-model-mysql.js');

let newDate = new Date(); 

exports.hotelIstorikoRender = async function (req, res){
    // res.render('istoriko');
    // console.log(loggedUserId);
    // if (req..idsundedemenou) {
    //     console.log(req.body.idsundedemenou);
    // }
    console.log(newDate);

    //let idPelath = 4;

    if(req.query.istoriko_userid){
        let idPelath = req.query.istoriko_userid ;
        console.log( req.query.istoriko_userid);

        model.getAllKrathseis(idPelath, function (err, plhrof) {
            if (err) {
                res.send(err);
            }
            console.log(plhrof);
            var myJSONnow = JSON.stringify(newDate);
            var datenow = myJSONnow.split("T");
            var f1 = datenow[0].split("-");
                var f2 = f1[0].substr(1);
                f1[0] = f2;
                var bnow = f1.map(function(item) {
                    return parseInt(item, 10);
                });
                // console.log(bnow);

             plhrof.forEach(element => {
                 var kratdate = element.start_date;
                 var myJSON = JSON.stringify(kratdate);
                var datekrat = myJSON.split("T");
                 var hmer = datekrat[0].split("-");
                 var hmer2 = hmer[0].substr(1);
                 hmer[0] = hmer2;
                 var b = hmer.map(function(item) {
                     return parseInt(item, 10);
                });

                 console.log(b);

                if ((b[0] < bnow[0]) || (b[0] == bnow[0] && b[1] < bnow[1]) || (b[0] == bnow[0] && b[1] == bnow[1] && b[2] <= bnow[2]) ) {
                    console.log("Mpravo ekanes thn tyxh soy");
                    model.ugradeKatastash(element.id);
                }
                
                // console.log(datenow);
            });
            res.render('istoriko', { plhrof: plhrof});
        });
    }

}
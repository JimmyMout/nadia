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

    if(req.body.userId){
        let idPelath = req.body.userId ;
        console.log( req.body.userId);

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
                //  Εδώ κόβουμε περιττά κομμάτια για να εκτυπωθεί στο ιστορικό μόνο η ημερομ.
                 element.start_date = datekrat[0];
                //  και αντίστοιχα για το end_date
                var kratdateend = element.end_date;
                var myJSONend = JSON.stringify(kratdateend);
                var datekratend = myJSONend.split("T");
                element.end_date = datekratend[0];

                 hmer[0] = hmer2;
                 var b = hmer.map(function(item) {
                     return parseInt(item, 10);
                });

                 console.log(b);

                if ((b[0] < bnow[0]) || (b[0] == bnow[0] && b[1] < bnow[1]) || (b[0] == bnow[0] && b[1] == bnow[1] && b[2] <= bnow[2]) ) {
                    console.log("Mpravo ekanes thn tyxh soy");
                    model.upgradeKatastash(element.id);
                }
                
                // console.log(datenow);
            });
            res.render('istoriko', { plhrof: plhrof});
        });
    }

}

exports.akyrwshKrathshs = function(req,res){

    console.log("Ypotithetai tha dw id",req.body.krathsh_id);
    model.akurwshKrat(req.body.krathsh_id,function(err,result) {
        if (err) {
            res.send(err);
        }
    });

    
    res.render('akyrwsh');
}

// Αξιολόγηση δωματίου
exports.Aksiologish=async function(req,res,callback){
    try{
        // console.log(req.body.password);
        let UserAksio = new model.NewAksiologish(req.body.star1, req.body.star2, req.body.star3, req.body.star4, req.body.star5, req.body.star6, req.body.text, req.body.protash);
        model.putInBaseAksiologish(UserAksio);
        res.redirect("/index");
        callback(false, true);
        }catch (error) {
            callback(error);
        }
}

exports.renderAksiologish = async function (req, res){
    res.render('aksiologish');
}
// εμφάνιση αξιολόγησης
exports.kratiseisRender = async function (req, res){
    model.emfanishAksio( function (err, aksio) {
        if (err) {
            res.send(err);
        }
        // console.log(aksio);
        aksio.forEach(element => {
            var sstar = 0;
            sstar = element.star1 + element.star2 + element.star3 + element.star4 + element.star5 + element.star6;
            sstar = sstar/6;
            sstar = Math.round(sstar);
            element.sunolo = sstar;
        })
        res.render('aksiologiseis', { aksio: aksio});
    });
}
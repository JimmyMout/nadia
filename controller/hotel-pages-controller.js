'use strict';

/** Διαλέξτε το κατάλληλο μοντέλο */

//const model = require('../model/hotel-model-mysql.js');

//const bcrypt = require('bcrypt');


exports.renderEggrafh = function (req,res){
    res.render('eggrafh');
}
exports.renderIndex = function (req,res){
    if(req.session.noname || req.session.wrong){
        req.session.destroy();
    }
    res.render('index');
}
exports.renderLogin = function (req,res){
    res.render('login');
}

exports.renderFwtografies= function (req,res){
    res.render('fwtografies');
}
exports.renderKrathsh= function (req,res){
    res.render('krathsh');
}
exports.renderKrathsh2= function (req,res){
    res.render('krathsh2');}

exports.renderKrathsh3= function (req,res){
        res.render('krathsh3');
    }


// exports.hotelPagesRender = function (req, res) {
//     //Ο δρομολογητής (router) δεν ξεχωρίζει με βάση το query string
//     //(μόνο με βάση το πρωτόκολλο και το path). Εδώ, ανάλογα με τις τιμές
//     //του query string εκτελούνται οι αντίστοιχες ενέργειες 

//     //Ελέγχουμε αν στο αίτημα υπάρχει τιμή στη μεταβλητή με όνομα removeTaskId
//     if (req.query.page) {
//         res.render(req.query.page );
//         // model.removeTask(req.query.removeTaskId, (err, removeResult) => {
//         //     //Αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
//         //     if (err) {
//         //         res.send(err);
//         //     }
//         //     else {
//         //         //Αν δεν υπάρχει σφάλμα, διάβασε από τη βάση και στείλε πίσω όλες τις εργασίες
//         //         model.getAllTasks(function (err, allTasks) {
//         //             //Αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
//         //             if (err) {
//         //                 res.send(err);
//         //             }
//         //             //Στείλε όλες τις εργασίες πίσω
//         //             else {
//         //                 res.render('tasks', { tasks: allTasks });
//         //             }
//         //         });
//         //     }
//         // });
//     }

//     //Ελέγχουμε αν στο αίτημα υπάρχει τιμή στη μεταβλητή με όνομα toggleTaskId
//     else if (req.query.toggleTaskId) {

//         // model.toggleTask(req.query.toggleTaskId, (err) => {
//         //     //Αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
//         //     if (err) {
//         //         res.send(err);
//         //     }
//         //     else {
//         //         //Αν δεν υπάρχει σφάλμα, διάβασε από τη βάση και στείλε πίσω όλες τις εργασίες
//         //         model.getAllTasks(function (err, allTasks) {
//         //             //Αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
//         //             if (err) {
//         //                 res.send(err);
//         //             }
//         //             else {
//         //                 //Στείλε όλες τις εργασίες πίσω
//         //                 res.render('tasks', { tasks: allTasks });
//         //             }
//         //         });
//         //     }
//         // });
//     }

//     //Ελέγχουμε αν στο αίτημα υπάρχει τιμή στη μεταβλητή με όνομα taskName (δηλ. να υπάρχει taskName και να έχει τιμή)
//     else if (req.query.taskName) {
//         //Κατασκευάζουμε μια νέα εργασία και τη βάζουμε στην βάση:
//         // let newTask = new model.Task(req.query.taskName);
//         // model.addTask(newTask, function (err) {
//         //     //αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
//         //     if (err) {

//         //         res.send(err);
//         //     }
//         //     else {
//         //         model.getAllTasks(function (err, allTasks) {
//         //             if (err) {

//         //                 res.send(err);
//         //             }
//         //             else {
//         //                 res.render('tasks', { tasks: allTasks });
//         //             }
//         //         });
//         //     }
//         // });
//     }

//     //Συνεχίζουμε την εκτέλεση, δείχνουμε όλες τις εργασίες που υπάρχουν στη βάση
//      else {
//          res.render('index');
//     //     console.log(req.session);
//     //     // model.getAllTasks(function (err, tasks) {
//     //     //     if (err) {
//     //     //         res.send(err);
//     //     //     }
//     //     //     else {
//     //     //         res.render('tasks', { tasks: tasks });
//     //     //     }
//     //     // });
//     //     try {
//     //         const hashedPassword = await bcrypt.hash("aa", 10);
//     //         console.log("αυτό είναι το hashed aa: ",hashedPassword );
//     //     } catch (error) {
//     //         console.log("κάτι πήγε λάθος στο hashing");
//     //     }
//      }
    
// }

// exports.renderLogin = function (req, res){
//     if (req.query.page) {
//         req.session.destroy(); // αυτό υπάρχει έτσι ώστε να εξαφανίζονται τα μηνύματα σφαλματος στο login page
//         res.render(req.query.page );}
//     else{res.render("login");}

// }
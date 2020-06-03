'use strict';

/** Διαλέξτε το κατάλληλο μοντέλο */

//const model = require('../model/hotel-model-mysql.js');



exports.hotelPagesRender = function (req, res) {
    //Ο δρομολογητής (router) δεν ξεχωρίζει με βάση το query string
    //(μόνο με βάση το πρωτόκολλο και το path). Εδώ, ανάλογα με τις τιμές
    //του query string εκτελούνται οι αντίστοιχες ενέργειες 

    //Ελέγχουμε αν στο αίτημα υπάρχει τιμή στη μεταβλητή με όνομα removeTaskId
    if (req.query.page) {
        res.render(req.query.page );
        // model.removeTask(req.query.removeTaskId, (err, removeResult) => {
        //     //Αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
        //     if (err) {
        //         res.send(err);
        //     }
        //     else {
        //         //Αν δεν υπάρχει σφάλμα, διάβασε από τη βάση και στείλε πίσω όλες τις εργασίες
        //         model.getAllTasks(function (err, allTasks) {
        //             //Αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
        //             if (err) {
        //                 res.send(err);
        //             }
        //             //Στείλε όλες τις εργασίες πίσω
        //             else {
        //                 res.render('tasks', { tasks: allTasks });
        //             }
        //         });
        //     }
        // });
    }

    //Ελέγχουμε αν στο αίτημα υπάρχει τιμή στη μεταβλητή με όνομα toggleTaskId
    else if (req.query.toggleTaskId) {

        // model.toggleTask(req.query.toggleTaskId, (err) => {
        //     //Αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
        //     if (err) {
        //         res.send(err);
        //     }
        //     else {
        //         //Αν δεν υπάρχει σφάλμα, διάβασε από τη βάση και στείλε πίσω όλες τις εργασίες
        //         model.getAllTasks(function (err, allTasks) {
        //             //Αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
        //             if (err) {
        //                 res.send(err);
        //             }
        //             else {
        //                 //Στείλε όλες τις εργασίες πίσω
        //                 res.render('tasks', { tasks: allTasks });
        //             }
        //         });
        //     }
        // });
    }

    //Ελέγχουμε αν στο αίτημα υπάρχει τιμή στη μεταβλητή με όνομα taskName (δηλ. να υπάρχει taskName και να έχει τιμή)
    else if (req.query.taskName) {
        //Κατασκευάζουμε μια νέα εργασία και τη βάζουμε στην βάση:
        // let newTask = new model.Task(req.query.taskName);
        // model.addTask(newTask, function (err) {
        //     //αν υπάρχει σφάλμα, στείλτο στον πελάτη και σταμάτα εδώ 
        //     if (err) {

        //         res.send(err);
        //     }
        //     else {
        //         model.getAllTasks(function (err, allTasks) {
        //             if (err) {

        //                 res.send(err);
        //             }
        //             else {
        //                 res.render('tasks', { tasks: allTasks });
        //             }
        //         });
        //     }
        // });
    }

    //Συνεχίζουμε την εκτέλεση, δείχνουμε όλες τις εργασίες που υπάρχουν στη βάση
    else {
        res.render('index');
        // model.getAllTasks(function (err, tasks) {
        //     if (err) {
        //         res.send(err);
        //     }
        //     else {
        //         res.render('tasks', { tasks: tasks });
        //     }
        // });
    }
    
}
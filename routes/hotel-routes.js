'use strict';

const express = require('express');
const router = express.Router();

//Για αιτήματα που γίνονται από τη σελίδα που φτιάχνεται με το ./views/tasks.hbs
const hotelPagesControler = require('../controller/hotel-pages-controller');
//Για αιτήματα που γίνονται από τη σελίδα που φτιάχνεται με το ./views/tasks-dynamic.hbs
//const taskListControllerFetch = require('../controller/task-list-controller-fetch');

//Για την υποστήριξη σύνδεσης/αποσύνδεσης χρηστών
const logInController = require('../controller/log-in-controller');
const krathshController = require('../controller/krathsh-controller');

const hotelIstorikoControler = require('../controller/hotel-istoriko-controller');
router.route('/istoriko').get(hotelIstorikoControler.hotelIstorikoRender);
//Καταχώριση συμπεριφοράς σε διάφορα URL

//Αυτό το URL τα χρησιμοποιεί η σελίδα που φτιάχνεται από την tasks.hbs
//Αν το αίτημα έγινε στο "/", τότε μια σειρά από συναρτήσεις χειρίζονται το αίτημα, η μια μετά την άλλη
//Πρώτα η checkAuthenticated ελέγχει αν έχει γίνει η αυθεντικοποίηση έπειτα η listAllTasksRender αναλαμβάνει να χειριστεί το αίτημα
//Ο χειρισμός στην περίπτωση της listAllTasksRender γίνεται με βάση τις παραμέτρους που έχουν περαστεί στο req.query


//router.route('/').get(logInController.checkAuthenticated, hotelPagesControler.listAllTasksRender);

router.route('/index').get(hotelPagesControler.renderIndex);
router.route('/fwtografies').get(hotelPagesControler.renderFwtografies);

// αυτά τα routes χρειάζονται check και redirect
router.route('/eggrafh').get(logInController.checkNotAuthenticated,hotelPagesControler.renderEggrafh);
router.route('/login').get(logInController.checkNotAuthenticated,hotelPagesControler.renderLogin);
router.route('/krathsh').get(logInController.checkAuthenticated,hotelPagesControler.renderKrathsh);
router.route('/krathsh2').get(logInController.checkAuthenticated,hotelPagesControler.renderKrathsh2);
router.route('/krathsh3').get(logInController.checkAuthenticated,hotelPagesControler.renderKrathsh3);


router.route('/').get(hotelPagesControler.renderIndex);

router.route('/login').post(logInController.doLogin);
router.route('/logout').get(logInController.doLogout);


router.route('/eggrafh_user').post(logInController.newUser)

router.route('/fetchRooms').get(krathshController.findRooms); //EDW THELEI ALLAGH GIATI EXOUME 2 IDIA ROUTE REQUEST HANDLER

router.route('/krathsh2Render').post(krathshController.krathsh2Render);


router.route('/krathsh3').post(krathshController.krathsh3);

router.route('/user').get(krathshController.findUserById);

router.route('/final_form').post(krathshController.kataxwrhseKrathsh);


//Αιτήματα για σύνδεση
//Δείξε τη φόρμα
// router.route('/login').get(logInController.checkNotAuthenticated, logInController.showLogInForm);
// //Αυτή η διαδρομή καλείται όταν η φόρμα φτάσει με POST και διεκπεραιώνει τη σύνδεση
// router.route('/login').post(logInController.doLogin);

// //Αποσυνδέει το χρήστη
// router.route('/logout').get(logInController.doLogout);

// //Εγγραφή νέου χρήστη
// router.route('/register').get(logInController.checkNotAuthenticated, logInController.showRegisterForm);
// router.post('/register', logInController.doRegister);

// router.get('/register1',(req,res)=>{
//     console.log("EGINA");
//     res.send('hi');
// });


//Τα παρακάτω URL χρησιμοποιούνται από τη σελίδα που φτιάχνεται με την tasks-dynamic.hbs
// router.route('/viewtasks').get(logInController.checkAuthenticated, taskListControllerFetch.listAllTasksRender);
// router.get('/tasks/remove/:removeTaskId', logInController.checkAuthenticated, taskListControllerFetch.removeTask);
// router.get('/tasks/add/:taskName', logInController.checkAuthenticated, taskListControllerFetch.addTask);
// router.get('/tasks/toggle/:toggleTaskId', logInController.checkAuthenticated, taskListControllerFetch.toggleTask);
// router.get('/tasks', logInController.checkAuthenticated, taskListControllerFetch.getAllTasks);
module.exports = router; 

'use strict';
const bcrypt = require('bcrypt');
const passport = require('passport');

/** Διαλέξτε το κατάλληλο μοντέλο */
const userModel = require('../model/user-model');

exports.showLogInForm = function (req, res) {
    res.render('login', {});
}

exports.showRegisterForm = function (req, res) {
    res.render('register', {});
}

exports.doRegister = function (req, res) {
    userModel.registerUser(req.body.username, req.body.password, (err, result) => {
        if (err) {
            console.error('registration error: ' + err);
            res.redirect('register');
        }
        else {
            res.redirect('/login');
        }
    })
}

exports.doLogin = function (req, res, authenticated) {

    //Ελέγχει αν το username και το password είναι σωστά και εκτελεί την
    //συνάρτηση επιστροφής authenticated
    const authenticateUser = async (username, password, authenticated) => {
        //const user = userModel.getUserByUsername(username);
        userModel.getUserByUsername(username,async (err,user)=>{
            console.log("afto epistrefetai ston user", user);

            if(err){
                //edw erxetai otan den briskei to username
                console.log(err);
                authenticated(true,null);
                return;
            }

            if (user == null) {
                // authenticated(null, false, { message: 'Δε βρέθηκε αυτός ο χρήστης' });
                console.log('Δε βρέθηκε αυτός ο χρήστης');
                authenticated(1,null);
                return;
             }

             try {
                //Σύγκρινε το hash του κωδικού που δόθηκε με αυτό που είναι αποθηκευμένο
                console.log("sto bcrypt compare μπαίνουν:",password, user.password)
                if ( await bcrypt.compare(password, user.password)) {
                    console.log('Επιτυχής σύνδεση,σωστός κωδικός');
                    authenticated(null, user);
                } else {
                    console.log("λάθος κωδικός ");
                    authenticated(2, null);
                    //authenticated(null, null, { message: 'Ο κωδικός πρόσβασης είναι λάθος' });
                }
            } catch (error) {
                console.log("προέκυψε ερρορ στο  try-catch", error);
                //authenticated(error);
            }

        });
        //console.log("afto epistrefetai ston user", user);
        // if (user == null) {
        //    // authenticated(null, false, { message: 'Δε βρέθηκε αυτός ο χρήστης' });
        //    console.log('Δε βρέθηκε αυτός ο χρήστης');
        //    return;
        // }

        // try {
        //     //Σύγκρινε το hash του κωδικού που δόθηκε με αυτό που είναι αποθηκευμένο
        //     if (await bcrypt.compare(password, user.password)) {
        //         console.log('Επιτυχής σύνδεση,σωστός κωδικός');
        //         authenticated(null, user);
        //     } else {
        //         console.log("λάθος κωδικός ");
        //         //authenticated(null, null, { message: 'Ο κωδικός πρόσβασης είναι λάθος' });
        //     }
        // } catch (error) {
        //     console.log("προέκυψε ερρορ στο  try-catch");
        //     //authenticated(error);
        // }
    }

    authenticateUser(req.body.username, req.body.password, (err, loginResult) => {
        if (err == 1) {
            console.log("egine error",err);
            req.session.noname = true;
            res.redirect("login");

        }
        else if(err == 2){
            console.log("egine error",err);
            req.session.wrong= true;
            res.redirect("login");

        }
        else {
            //Θέτουμε τη μεταβλητή συνεδρίας "loggedId"
            req.session.loggedUserId = loginResult.userid;
            req.session.name = loginResult.onoma;
            req.session.lname = loginResult.epwnymo;
            console.log(req.session);
            //Αν έχει τιμή η μεταβλητή req.session.originalUrl, αλλιώς όρισέ τη σε "/" 
            const redirectTo = req.session.originalUrl || "/";
            // res.redirect("/");
            res.redirect(redirectTo);
        }
    })
}

exports.doLogout = (req, res) => {
    //Σημειώνουμε πως ο χρήστης δεν είναι πια συνδεδεμένος
    req.session.destroy();
    res.redirect('/');
}

//Τη χρησιμοποιούμε για να ανακατευθύνουμε στη σελίδα /login όλα τα αιτήματα από μη συνδεδεμένςου χρήστες
exports.checkAuthenticated = function (req, res, next) {
    //Αν η μεταβλητή συνεδρίας έχει τεθεί, τότε ο χρήστης είναι συνεδεμένος
    // console.log(req);
    if (req.session.loggedUserId) {
        console.log("user is authenticated");
        //Καλεί τον επόμενο χειριστή (handler) του αιτήματος
        next();
    }
    else {
        //Αν έχει τιμή η μεταβλητή req.session.originalUrl, αλλιώς όρισέ τη σε "/login" 
        const redirectTo = req.session.originalUrl || "/login";
        // res.redirect("/");
        res.redirect(redirectTo);
    }

}

//Τη χρησιμοποιούμε για να κρύψουμε τη φόρμα login και τη register από τους χρήστες που είναι ήδη
//συνδεδεμένοι
exports.checkNotAuthenticated = function (req, res, next) {
    //Αν η μεταβλητή συνεδρίας έχει τεθεί, τότε ο χρήστης είναι συνεδεμένος


    if (req.session.loggedUserId) {
        console.log("user is authenticated");
        //Καλεί τον επόμενο χειριστή (handler) του αιτήματος
        res.redirect('/');
    }
    else {
        next();
    }
}
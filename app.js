//Χρησιμοποιούμε το πακέτο dotenv
//Αν η μεταβλητή περιβάλλοντος 'NODE_ENV' δεν έχει τιμή 'production', τότε
//θα φορτωθούν οι ρυθμίσεις από το dotenv, 
//δηλ οι μεταβλητές που ορίζονται στο αρχείο '.env' 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const session = require('express-session');

//Χρειάζεται για το χειρισμό των αιτημάτων που έρχονται με POST
//(extended:false σημαίνει πως δε χρειαζόμαστε να διαβάσουμε εμφωλευμένα αντικείμενα που έχουν έρθει με το αίτημα POST)
app.use(express.urlencoded({ extended: false }));

//Ενεργοποίηση της συνεδρίας. 
app.use(session({
    name: 'hotel-session',
    //Για την ιδιότητα 'secret':
    //Φτιάξτε ένα αρχείο με όνομα '.env' τον ίδιο φάκελο
    //και γράψτε μέσα SESSION_SECRET = enatyxaiomegaloalfarithmitiko
    //και εδώ γράψτε:
    secret:    process.env.SESSION_SECRET, // κλειδί για κρυπτογράφηση του cookie
    //secret: 'secret', 
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,//1 ώρα
        sameSite: true,
        // secure: true //Το cookie θα σταλεί μόνο μέσω https. Σε απλό http δε θα λειτουργήσει
    }
}));

//Το template μας μπορεί να χρειάζεται να φορτώσει κάποια CSS ή JS
//Δηλώνουμε πως θα βρίσκονται στον φάκελο /static
//Για παράδειγμα το /view/taskbar-dynamic.hbs φορτώνει αρχεία με αυτό τον τρόπο
app.use(express.static('static'));

//Σε κάθε request περνάμε στην περιοχή locals του response object την τιμή
//του loggedUserId. Η res.locals.userId είναι προσβάσιμη από το hbs ως userId
app.use((req, res, next) => {

    res.locals.userId = req.session.loggedUserId;
    res.locals.name = req.session.name;
    res.locals.lname = req.session.lname;
    res.locals.noname = req.session.noname;
    res.locals.wrong = req.session.wrong;

    next();
})

//Διαδρομές. Αντί να γράψουμε τις διαδρομές μας εδώ, τις φορτώνουμε από ένα άλλο αρχείο
const routes = require('./routes/hotel-routes');
//και τώρα χρησιμοποιούμε αυτές τις διαδρομές
app.use('/', routes);

//Χρήση των views
//Σημ.: η engine πρέπει να έχει ίδιο όνομα με το extname, αλλιώς δεν θα αναγνωριστεί το extname (αλλιώς τα αρχεία θα πρέπει να τελειώνουν με .handlebars)
app.engine('hbs', exphbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));
//και ορίζουμε πως θα χρησιμοποιήσουμε τη μηχανή template με όνομα 'hbs'
app.set('view engine', 'hbs');

module.exports = app;

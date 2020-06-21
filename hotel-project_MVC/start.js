const app = require('./app');

/**
 * Αν υπάρχει η μεταβλητή περιβάλλοντος 'PORT' χρησιμοποίησε την τιμή της, 
 * αλλιώς χρησιμοποίησε τη θύρα 3000.
 * 
 * Βοηθάει στο deployment στο Azure.
 */
let port = process.env.PORT || '3000';

const server = app.listen(port, () => { console.log("Listening to port " + port) });

const makeFirestore = require("./firestore.js");

const admin = require('firebase-admin');
const credentials = require('../key.json');


admin.initializeApp({
    credential: admin.credential.cert(credentials)
});
    
const db = admin.firestore();

const firestore = makeFirestore({ db, admin });


module.exports = { firestore, admin };
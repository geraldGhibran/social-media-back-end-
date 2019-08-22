const admin = require('firebase-admin');
// const serviceAccount = require("C:/Users/GERALD GHIBRAN G/Downloads/socialmediapp-603a4-firebase-adminsdk-ef6qx-686dd42bc2.json");

const db = admin.firestore;


// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://socialmediapp-603a4.firebaseio.com"
//   });

admin.initializeApp();
module.exports = { admin, db };

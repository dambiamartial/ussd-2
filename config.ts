import firebase = require("firebase-admin");

export const firebaseConfig= {
  apiKey: "AIzaSyC5qjVXD-OYUdWDaR650q2P89CyklkCNN8",
  authDomain: "ussd-2-1f261.firebaseapp.com",
  projectId: "ussd-2-1f261",
  storageBucket: "ussd-2-1f261.appspot.com",
  messagingSenderId: "275648304242",
  appId: "1:275648304242:web:9c486f17a4dc2ffc039eeb"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const User = db.collection("Users");
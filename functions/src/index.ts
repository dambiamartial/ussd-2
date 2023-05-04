import functions = require("firebase-functions");
import express = require("express");
import bodyParser = require("body-parser");
// import config = require("../../config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/ussd", (request, resp)=> {
  const {
    phoneNumber= "222 288 984",
    text,
  } = request.body;

  let response = "";

  switch (text) {
  case "":
    response = "CON What would you like to check? <br/>"+
    " 1. My Account <br/> 2. My Phone Number";
    break;
  case "1":
    response ="CON Choose account information you want to view <br/>"+
    " 1. Account Number <br/> 2. Account balance";
    break;
  case "2":
    response = "END your phone number is "+phoneNumber;
    break;
  case "1*1":
    response = "END your phone number is "+phoneNumber;
    break;
  case "1*2":
    response = "END your balance is "+"10000";
    break;
  default:
    response = "END Session end";
  }

  resp.set("Content-Type: text/plain");
  resp.send(response);
});

exports.ussd = functions.https.onRequest(app);


// Initialize Firebase
// const app = initializeApp.initializeApp(config.firebaseConfig);

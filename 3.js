// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM-xT6qR91K3miVN-24pZgb6qTEMRdsNk",
  authDomain: "kaffedra-fdbdb.firebaseapp.com",
  projectId: "kaffedra-fdbdb",
  storageBucket: "kaffedra-fdbdb.appspot.com",
  messagingSenderId: "117036470623",
  appId: "1:117036470623:web:a46165b9777ca3eaa066ea",
  measurementId: "G-F6J4GJMF68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

var email = document.getElementById("newEmail")
var user = document.getElementById("nickname")
var password = document.getElementById("newPassword")
var password1 = document.getElementById("confirmPassword")

window.signup = function(e) {  
  e.preventDefault(); 

  if (user.value == "" || email.value == "" || password.value == "" || password1.value == "") {
    alert("All Field Are Required");
    return false;
  }

  if (password.value != password1.value) {
    alert("Password Confirmation is Wrong");
    return false;
  }

  var obj = {
    firstName: user.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success) {
 
      alert("Signup Successful");
    })
    .catch(function(err) {
      alert("Error: " + err);
    });

  console.log();
};
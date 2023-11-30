// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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
const auth = getAuth();

var email = document.getElementById("newEmail");
var password = document.getElementById("newPassword");
window.login = function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success) {
      alert("logined Successfully")
      var aaaa = (success.user.uid);
      localStorage.setItem("uid", aaaa)
      console.log(aaaa)



      window.location.replace('../index.html')
      // localStorage.setItem(success,user,uid)

    })
    .catch(function(err) {
      alert("login error" + err);
    });

  console.log(obj);
}
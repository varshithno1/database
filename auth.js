// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBUP5pwYkYhsaraLJh9xY6uVc-Tn-11vWo",
authDomain: "database-f41c7.firebaseapp.com",
databaseURL: "https://database-f41c7-default-rtdb.firebaseio.com",
projectId: "database-f41c7",
storageBucket: "database-f41c7.appspot.com",
messagingSenderId: "1037989436965",
appId: "1:1037989436965:web:46d1af53a7f041761fe9cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provide = GoogleAuthProvider();
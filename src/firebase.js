import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

//import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHEzg1Odve2JooMmNnq3Cqer4JXcofM5o",
  authDomain: "react-chess-43793.firebaseapp.com",
  projectId: "react-chess-43793",
  storageBucket: "react-chess-43793.appspot.com",
  messagingSenderId: "344205026782",
  appId: "1:344205026782:web:2e7aaf365d5b2bd044694f"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
export const db = firebase.firestore();
//export const db = firebase.database;
export const auth = firebase.auth;
export default firebase;

/*

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHEzg1Odve2JooMmNnq3Cqer4JXcofM5o",
  authDomain: "react-chess-43793.firebaseapp.com",
  projectId: "react-chess-43793",
  storageBucket: "react-chess-43793.appspot.com",
  messagingSenderId: "344205026782",
  appId: "1:344205026782:web:2e7aaf365d5b2bd044694f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth;
export default app;

*/
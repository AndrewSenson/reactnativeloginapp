// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
import firebase from 'firebase/app';
import 'firebase/auth';

import {  signInWithEmailAndPassword } from "firebase/auth";





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPwMA-Hb0eN-0ScqzsDP3lWmjldrMSkxE",
  authDomain: "reactnative-e20e2.firebaseapp.com",
  projectId: "reactnative-e20e2",
  storageBucket: "reactnative-e20e2.appspot.com",
  messagingSenderId: "158303436282",
  appId: "1:158303436282:web:852f1cfba32840b2a77843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
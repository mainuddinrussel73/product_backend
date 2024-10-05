// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuknaQbgeG353fl2tuQt_J6C63E9aFYC0",
  authDomain: "bookshopapp-1e963.firebaseapp.com",
  projectId: "bookshopapp-1e963",
  storageBucket: "bookshopapp-1e963.appspot.com",
  messagingSenderId: "651936277424",
  appId: "1:651936277424:web:fab72dcb8fa01f32c8ec75",
  measurementId: "G-806BV45X54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdd0qxOInZ8Yn0ARPMM15gMao4m1QvMx8",
  authDomain: "chat--app-9687a.firebaseapp.com",
  projectId: "chat--app-9687a",
  storageBucket: "chat--app-9687a.appspot.com",
  messagingSenderId: "745227221428",
  appId: "1:745227221428:web:ab27926171517de2521ae1",
  measurementId: "G-JFY4KHDL77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

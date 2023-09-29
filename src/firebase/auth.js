// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDyquaEd9MLVNbPw4IUPVeokMQxcFe4C8",
  authDomain: "gymapp-ayefit.firebaseapp.com",
  databaseURL: "https://gymapp-ayefit-default-rtdb.firebaseio.com",
  projectId: "gymapp-ayefit",
  storageBucket: "gymapp-ayefit.appspot.com",
  messagingSenderId: "263889688118",
  appId: "1:263889688118:web:bfc5e6aeb4a363b4e9ea97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);

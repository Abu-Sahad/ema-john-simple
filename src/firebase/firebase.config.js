// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAExs6N2TQyY-TjoaqZI5P-4rfQcBj3XSI",
    authDomain: "ema-john-simple-auth-1eacb.firebaseapp.com",
    projectId: "ema-john-simple-auth-1eacb",
    storageBucket: "ema-john-simple-auth-1eacb.appspot.com",
    messagingSenderId: "491176504421",
    appId: "1:491176504421:web:d930bdd0d01f5ac7396a8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
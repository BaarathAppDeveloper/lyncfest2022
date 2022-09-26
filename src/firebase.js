// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL-_kaRWXcmyMjsWhpQxqCn0dhAXGpZgI",
    authDomain: "lyncfest2022-a7e54.firebaseapp.com",
    projectId: "lyncfest2022-a7e54",
    storageBucket: "lyncfest2022-a7e54.appspot.com",
    messagingSenderId: "695810395294",
    appId: "1:695810395294:web:d60110b01e36480e7fbf8f",
    measurementId: "G-WM0B8XD7XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
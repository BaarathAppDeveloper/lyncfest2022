// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRhNJ4ugmIbulmsFkJEPqr8P5zrQmDy-8",
    authDomain: "lyncfest2022.firebaseapp.com",
    projectId: "lyncfest2022",
    storageBucket: "lyncfest2022.appspot.com",
    messagingSenderId: "651207500362",
    appId: "1:651207500362:web:cd8c04cf93d31463207cb3",
    measurementId: "G-CK5BB9J0J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
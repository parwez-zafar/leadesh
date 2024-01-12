// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAztrd5mKpH2sO8JFUd8I8aZg8t6GmmlEY",
    authDomain: "leadesh.firebaseapp.com",
    projectId: "leadesh",
    storageBucket: "leadesh.appspot.com",
    messagingSenderId: "422374059004",
    appId: "1:422374059004:web:b2799d4562f4ab9fb2e079",
    measurementId: "G-8RX1KN8SKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
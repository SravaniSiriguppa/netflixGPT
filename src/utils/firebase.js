// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeUvNdWKfN95y4EXfliPSJSXrJLB71TD4",
  authDomain: "netflixgpt-b589c.firebaseapp.com",
  projectId: "netflixgpt-b589c",
  storageBucket: "netflixgpt-b589c.firebasestorage.app",
  messagingSenderId: "708097085032",
  appId: "1:708097085032:web:539cdbd8d571a4fe8ab5dd",
  measurementId: "G-HSK9LS8P5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYAi0dk_1hBpM_mf6JmiqTwWrh-GrZ1iw",
  authDomain: "netflixgpt-c0d2e.firebaseapp.com",
  projectId: "netflixgpt-c0d2e",
  storageBucket: "netflixgpt-c0d2e.firebasestorage.app",
  messagingSenderId: "482387115215",
  appId: "1:482387115215:web:925800b232af8c7009cbba",
  measurementId: "G-W8WBGS800V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
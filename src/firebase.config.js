// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhi1PYQCvkVevciuVJiI2suqyqb32gWow",
  authDomain: "early-job-placement-next.firebaseapp.com",
  projectId: "early-job-placement-next",
  storageBucket: "early-job-placement-next.firebasestorage.app",
  messagingSenderId: "61933888480",
  appId: "1:61933888480:web:4b3e3af3e039579fd24185",
  measurementId: "G-KP9J6DXEYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

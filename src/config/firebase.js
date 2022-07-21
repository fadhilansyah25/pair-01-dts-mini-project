// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0eStOYeGdTjHTolxIwoxl_i5DpvDACc8",
  authDomain: "movies-a3087.firebaseapp.com",
  projectId: "movies-a3087",
  storageBucket: "movies-a3087.appspot.com",
  messagingSenderId: "764593046050",
  appId: "1:764593046050:web:1a9a37a33927154143c07b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

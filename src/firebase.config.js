// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8rP2_-8-P7OdBTudPmIvp0slLPWlITbE",
  authDomain: "cars-doctor-56e26.firebaseapp.com",
  projectId: "cars-doctor-56e26",
  storageBucket: "cars-doctor-56e26.appspot.com",
  messagingSenderId: "547963161689",
  appId: "1:547963161689:web:a724bb08f52f5fa6777548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
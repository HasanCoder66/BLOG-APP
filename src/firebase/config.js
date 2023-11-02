import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSswhz2Nw5fWuWJn5qkbTTCLW3BUFLc6k",
  authDomain: "blog-app-686b4.firebaseapp.com",
  projectId: "blog-app-686b4",
  storageBucket: "blog-app-686b4.appspot.com",
  messagingSenderId: "613355971005",
  appId: "1:613355971005:web:04ee4085571e40212af2d4",
  measurementId: "G-Z37F70N1W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
    getAuth,
    createUserWithEmailAndPassword ,
    auth,
    app,
    signInWithEmailAndPassword
  
  
  }
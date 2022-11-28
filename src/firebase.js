// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABGETuDL8U7WyupbQrTgBOH6ILtVrGgfY",
  authDomain: "silentprogrammer-c6397.firebaseapp.com",
  projectId: "silentprogrammer-c6397",
  storageBucket: "silentprogrammer-c6397.appspot.com",
  messagingSenderId: "884942224831",
  appId: "1:884942224831:web:ac87e79bd8b0286790f50a",
  measurementId: "G-C9NPZ1YX9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

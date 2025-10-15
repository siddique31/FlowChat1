// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr5UnIzSwjYWwYmh53CqfwQof9RBVMDmM",
  authDomain: "flowchat-d68a3.firebaseapp.com",
  projectId: "flowchat-d68a3",
  storageBucket: "flowchat-d68a3.appspot.com",
  messagingSenderId: "634520121209",
  appId: "1:634520121209:web:bf9efab2a4b20661f1c9a8",
  measurementId: "G-XXKC5LRELS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

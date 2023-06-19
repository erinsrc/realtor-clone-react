// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD1X9at6_PULKUiCc5onhG-5XPDmaSrkw",
  authDomain: "realtor-clone-react-b329b.firebaseapp.com",
  projectId: "realtor-clone-react-b329b",
  storageBucket: "realtor-clone-react-b329b.appspot.com",
  messagingSenderId: "969336721688",
  appId: "1:969336721688:web:c81a17daf428db6ca14e6d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

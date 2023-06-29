// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFw5WDBIZlriAqDHoSHB9uZxRImMJW8TY",
  authDomain: "auth-react-8dc2b.firebaseapp.com",
  projectId: "auth-react-8dc2b",
  storageBucket: "auth-react-8dc2b.appspot.com",
  messagingSenderId: "975179618711",
  appId: "1:975179618711:web:930d3c5a6db56da0ef8cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw07SWEVlWu014MFdJX7aldnxEZDoL22g",
  authDomain: "vue-autentico-2.firebaseapp.com",
  projectId: "vue-autentico-2",
  storageBucket: "vue-autentico-2.appspot.com",
  messagingSenderId: "373240442665",
  appId: "1:373240442665:web:1ad79897c81a1050f71138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
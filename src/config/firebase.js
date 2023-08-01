import firebase from "firebase/compat/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBvBzCQBJxIpnbCefbU_V1eZjrHsFkUrgo",
  authDomain: "al--shathibi.firebaseapp.com",
  projectId: "al--shathibi",
  storageBucket: "al--shathibi.appspot.com",
  messagingSenderId: "738852423547",
  appId: "1:738852423547:web:4bad97ba46993419731fde",
  measurementId: "G-JGBFDCW6JJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
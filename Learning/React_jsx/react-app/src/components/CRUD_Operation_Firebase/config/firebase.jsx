//
// ! copying from --> (https://console.firebase.google.com/u/0/project/test-project-b9415/overview)
//
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, set, update, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv3S6W2mdUWuEgaY7h6VNfsIppFzxkom4",
  authDomain: "test-project-b9415.firebaseapp.com",
  databaseURL:
    "https://test-project-b9415-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-project-b9415",
  storageBucket: "test-project-b9415.appspot.com",
  messagingSenderId: "1059053822652",
  appId: "1:1059053822652:web:a11ed8d550889018d5e6b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, set, update, onValue };

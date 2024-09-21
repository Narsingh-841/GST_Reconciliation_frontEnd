// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtkJYdjvi4ZxeYWOh4Cmzafm6snYoiHM0",
  authDomain: "gst-reconciliation-43374.firebaseapp.com",
  projectId: "gst-reconciliation-43374",
  storageBucket: "gst-reconciliation-43374.appspot.com",
  messagingSenderId: "344288214092",
  appId: "1:344288214092:web:d06968ff67de4a620e48e9",
  measurementId: "G-MN9596DE45"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export const storage = getStorage(app); 
export default app
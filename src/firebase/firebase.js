// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore, 
  doc,
  getDoc, 
  getDocs, 
  collection,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrTSEBMnfMXx5htdPg9UtR2NvgtXh404U",
  authDomain: "ecommerce-curso-afac0.firebaseapp.com",
  projectId: "ecommerce-curso-afac0",
  storageBucket: "ecommerce-curso-afac0.firebasestorage.app",
  messagingSenderId: "170384687284",
  appId: "1:170384687284:web:fa935d70b335f32db0d7e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

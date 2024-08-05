// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcIPL_Ni4tVO9dLRGXQVScuHS5nPrvNwo",
  authDomain: "portfoliofeedback-fbc27.firebaseapp.com",
  projectId: "portfoliofeedback-fbc27",
  storageBucket: "portfoliofeedback-fbc27.appspot.com",
  messagingSenderId: "417023353695",
  appId: "1:417023353695:web:17558ac1998f841061ccea",
  measurementId: "G-TZ6G2Q6F95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

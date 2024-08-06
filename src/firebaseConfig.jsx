// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "--YOUR--KEY--",
  authDomain: "--YOUR--KEY--",
  projectId: "--YOUR--KEY--",
  storageBucket: "--YOUR--KEY--",
  messagingSenderId: "--YOUR--KEY--",
  appId: "--YOUR--KEY--",
  measurementId: "--YOUR--KEY--"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

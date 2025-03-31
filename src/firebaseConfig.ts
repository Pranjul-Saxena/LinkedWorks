// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsWW_iUlx1PsvVKod_GEvrYM0_uDhQwAI",
    authDomain: "linkedworks-c3e58.firebaseapp.com",
    projectId: "linkedworks-c3e58",
    storageBucket: "linkedworks-c3e58.firebasestorage.app",
    messagingSenderId: "926441846934",
    appId: "1:926441846934:web:cead7928906ea4a05caab7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

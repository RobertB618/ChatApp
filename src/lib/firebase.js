
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-193a9.firebaseapp.com",
  projectId: "react-chat-193a9",
  storageBucket: "react-chat-193a9.firebasestorage.app",
  messagingSenderId: "76403588971",
  appId: "1:76403588971:web:3a9959ba5acbd6ecb2d62e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
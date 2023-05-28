// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdxMiMc0mBNMY2MKiDZFctZ6jvAdDiH7k",
  authDomain: "theme-chat-ff463.firebaseapp.com",
  projectId: "theme-chat-ff463",
  storageBucket: "theme-chat-ff463.appspot.com",
  messagingSenderId: "821693914107",
  appId: "1:821693914107:web:8a88361e65b7cbd27d095e"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()

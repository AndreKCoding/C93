import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgp9t4GxbPy6TCBynmHaJcbO3C4090fS8",
  authDomain: "app-mensagem-2f3de.firebaseapp.com",
  databaseURL: "https://app-mensagem-2f3de-default-rtdb.firebaseio.com",
  projectId: "app-mensagem-2f3de",
  storageBucket: "app-mensagem-2f3de.appspot.com",
  messagingSenderId: "560502641606",
  appId: "1:560502641606:web:02aad1d9c6e48f7bd618c7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
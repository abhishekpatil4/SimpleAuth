import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCe63qTxqb3XkRI5zkghUbARYVtJ8FI74w",
  authDomain: "fb-auth-e06b5.firebaseapp.com",
  projectId: "fb-auth-e06b5",
  storageBucket: "fb-auth-e06b5.appspot.com",
  messagingSenderId: "71093994251",
  appId: "1:71093994251:web:53ba811002d9f35c32980e",
  measurementId: "G-19ESFEJXZ9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);
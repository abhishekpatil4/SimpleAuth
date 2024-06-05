import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_apiKey,
    authDomain: import.meta.env.VITE_FIREBASE_authDomain,
    projectId: import.meta.env.VITE_FIREBASE_projectId,
    storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
    messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
    appId: import.meta.env.VITE_FIREBASE_appId,
    measurementId: import.meta.env.VITE_FIREBASE_measurementId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const db = getFirestore(app);

export const addUserData = async (userID, firstName, lastName, email) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            userID: userID,
            firstName: firstName,
            lastName: lastName,
            email: email
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}



export const getUserData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const arr = [];
    // return querySnapshot;
    querySnapshot.forEach((doc) => {
        arr.push({
            firstName: doc.data().firstName,
            lastName: doc.data().lastName
        })
    });
    return arr;
}
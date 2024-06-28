import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAd4fO_Jsy6TONGNKydQvjgqmeHFQSRJNQ",
    authDomain: "csi-demo-mobile.firebaseapp.com",
    projectId: "csi-demo-mobile",
    storageBucket: "csi-demo-mobile.appspot.com",
    messagingSenderId: "770931512162",
    appId: "1:770931512162:web:4fc3d75b7a6aab13ec123b"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
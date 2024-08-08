import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpS-AqegvtezdZIMkuUb5EWtbdFBuZxVg",
    authDomain: "on24-861ca.firebaseapp.com",
    projectId: "on24-861ca",
    storageBucket: "on24-861ca.appspot.com",
    messagingSenderId: "905865220026",
    appId: "1:905865220026:web:16bb3b712cd9ef34e81783",
    measurementId: "G-CKWCLWFHKB"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const leaderboardCollection = collection(db, 'leaderboard');
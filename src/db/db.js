import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADYkwrZyOHSv2RP35vBzG91wlkaNlIbN0",
    authDomain: "proyecto-coder-react-js.firebaseapp.com",
    projectId: "proyecto-coder-react-js",
    storageBucket: "proyecto-coder-react-js.firebasestorage.app",
    messagingSenderId: "319836525635",
    appId: "1:319836525635:web:cd660407cb1c0e767b30f6"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db
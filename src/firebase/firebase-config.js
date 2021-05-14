import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUlcxAq6XeP1zPSiGQep0-HaAvPHry7Og",
    authDomain: "journalapp-cursofh.firebaseapp.com",
    projectId: "journalapp-cursofh",
    storageBucket: "journalapp-cursofh.appspot.com",
    messagingSenderId: "716037286879",
    appId: "1:716037286879:web:a69cfa2e413d7881a5b26a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}
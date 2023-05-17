// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB3bUFEmWAwS9KYjD4dsXMbO2-lXxoP4Qk",
    authDomain: "clone-41697.firebaseapp.com",
    projectId: "clone-41697",
    storageBucket: "clone-41697.appspot.com",
    messagingSenderId: "200677153484",
    appId: "1:200677153484:web:3499607fae18de1a060069",
    measurementId: "G-6627ZH75TL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
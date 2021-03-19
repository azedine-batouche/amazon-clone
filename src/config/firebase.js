// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAj67irLRDN3Rp607ZTgzPGl4zyshkDSdM",
    authDomain: "clone-7979d.firebaseapp.com",
    projectId: "clone-7979d",
    storageBucket: "clone-7979d.appspot.com",
    messagingSenderId: "20407622049",
    appId: "1:20407622049:web:9713190096f5a3ec3893e0",
    measurementId: "G-YG1YPGV6TY"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

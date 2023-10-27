import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzLpYhFNVqeY4dB8tTnKv_eI83E21IVZM",
  authDomain: "tecnotics.firebaseapp.com",
  projectId: "tecnotics",
  storageBucket: "tecnotics.appspot.com",
  messagingSenderId: "855594497441",
  appId: "1:855594497441:web:a0393fe8dd232175b247e0",
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();

export default db;

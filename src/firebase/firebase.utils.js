import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBovNWT1k_KCAQYgjOEj04Zb5tCuaVt4B0",
  authDomain: "e-commerce-d94d2.firebaseapp.com",
  projectId: "e-commerce-d94d2",
  storageBucket: "e-commerce-d94d2.appspot.com",
  messagingSenderId: "1025298494683",
  appId: "1:1025298494683:web:082b77601a62f997fd88fe",
  measurementId: "G-44N6V5R025",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

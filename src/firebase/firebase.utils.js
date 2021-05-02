import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const config = {
  apiKey: "AIzaSyAd9LTXOKJDWE14et0CBZ9B03qPhL2BXFQ",
  authDomain: "e-commerce-shop-11910.firebaseapp.com",
  projectId: "e-commerce-shop-11910",
  storageBucket: "e-commerce-shop-11910.appspot.com",
  messagingSenderId: "631473872054",
  appId: "1:631473872054:web:a1dc4d703cbe5b33b89a17",
  measurementId: "G-N3JC5350B9",
};

firebase.initializeApp(config);

// eslint-disable-next-line import/no-anonymous-default-export
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;




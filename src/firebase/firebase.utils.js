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
facebookProvider.setCustomParameters({ prompt: "select_account_fb" });

export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider).catch(error => {
  if(error.code === "auth/account-exists-with-different-credential"){
    var pendingCred = error.credential;
    // The provider account's email address.
    var email = error.email;
    console.log(error)
    auth.fetchSignInMethodsForEmail(email).then(methods => {
      if(methods[0] === "password"){
        //var password = promptUserForPassword();
        return;
      }
      var provider = getProviderForProviderId(methods[0]);
      console.log("eree")
      auth.signInWithRedirect(provider).then(result => {
        result.user.linkAndRetrieveDataWithCredential(pendingCred).then(usercred => {
          return usercred;
        }).catch(err => console.log(err))
      }).catch(err => console.log(err))
    })
  }
});
const getProviderForProviderId = (method) => {
  if(method === "google.com"){
    return googleProvider;
  }
}

export const createUserProfile = async (user, data) => {
  if(!user) return;

  const userRef = firestore.doc(`user/${user.uid}`);
  const snapshot = userRef.get();

  if(!snapshot.exists){
    const { displayName, email} = user;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      })
    }catch(err){
      console.log("User creating failure : " + err.message);
    }
  }
  return userRef;
}

export default firebase;



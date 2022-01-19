// Firebase config code
import firebase from "firebase/app";

// Firebase service in scope
import "firebase/auth";

// SDK
const firebaseConfig = {
  apiKey: "AIzaSyBsCiE-a_mkK8e7OyUrkd_sF13ruu5fj4c",
  authDomain: "react-firebase-projects-5cd63.firebaseapp.com",
  projectId: "react-firebase-projects-5cd63",
  storageBucket: "react-firebase-projects-5cd63.appspot.com",
  messagingSenderId: "283404157023",
  appId: "1:283404157023:web:66ab88b998849ffc481bea",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Access auth property
const auth = firebase.auth();

// Set up Google provider
const provider = new firebase.auth.GoogleAuthProvider();

// Set custom parameters for provider
provider.setCustomParameters({
  prompt: "select_account",
});

// login function
function login() {
  return auth.signInWithPopup(provider);
}

// logout function
function logout() {
  return auth.signOut();
}

import firebase from "firebase";
import "firebase/auth";
import "firebase/app";
import "firebase/storage";
import "firebase/firestore";

/* 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSEEAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyAKe0Dzs53WcrzYOCP_pQ84jq8fflzBtIE",
  authDomain: "devlog-bcef9.firebaseapp.com",
  projectId: "devlog-bcef9",
  storageBucket: "devlog-bcef9.appspot.com",
  messagingSenderId: "227337644775",
  appId: "1:227337644775:web:d7e1e585772a5bbbe39042",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const storageService = firebase.storage();

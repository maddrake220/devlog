import firebase from "firebase";
import "firebase/firestore";

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

export const dbService = firebase.firestore();

import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSFncGC9M37gE9iwnsfBnxdnj2kBGuu1o",
  authDomain: "signal-clone-474b9.firebaseapp.com",
  projectId: "signal-clone-474b9",
  storageBucket: "signal-clone-474b9.appspot.com",
  messagingSenderId: "44008930523",
  appId: "1:44008930523:web:668c8c749b85006efae0fe",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

// Import the functions you need from the SDKs you need
//import * as  firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
 import { getStorage } from "firebase/storage";
 import { getFirestore,serverTimestamp} from "firebase/firestore";
//import firebase from 'firebase/app'
//import 'firebase/storage'
//import 'firebase/firestore'
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB1n5ZNiBBHdxnZqRNHesVfGHxnZ47GT-Q",
    authDomain: "firegram-8e851.firebaseapp.com",
    projectId: "firegram-8e851",
    storageBucket: "firegram-8e851.appspot.com",
    messagingSenderId: "833310879759",
    appId: "1:833310879759:web:d116d60dbe16d23900737a"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
//const projectStorage = firebase.storage();
const projectStorage = getStorage(app);
//const projectFireStore = firebase.firestore();
const projectFireStore = getFirestore(app);
//const timestamp = firebase.firestore.FeildValue.serverTimestamp;
const timestamp = serverTimestamp;
export {projectFireStore,projectStorage,timestamp}
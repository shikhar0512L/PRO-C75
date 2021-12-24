import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwmzLkM2yBXR1VIPGbAULtknC6XGuFTFQ",
  authDomain: "e-ride-badcd.firebaseapp.com",
  projectId: "e-ride-badcd",
  storageBucket: "e-ride-badcd.appspot.com",
  messagingSenderId: "472261998709",
  appId: "1:472261998709:web:06b20a68e6de5c20bfa03c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

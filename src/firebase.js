import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDoiJf4UjtRC29mo6T7YQhI3mGI6-bsmBI",
  authDomain: "tinder-clone-ded5d.firebaseapp.com",
  databaseURL: "https://tinder-clone-ded5d.firebaseio.com",
  projectId: "tinder-clone-ded5d",
  storageBucket: "tinder-clone-ded5d.appspot.com",
  messagingSenderId: "963478068767",
  appId: "1:963478068767:web:fc40aa4cc4ef9aaa2a3f2a",
  measurementId: "G-5QCYBJC937",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

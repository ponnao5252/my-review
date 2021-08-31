import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";
// import firebaseui from "firebaseui";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB-jW2SpgoacHbelfY3beSP7VlEF6I-MZk",
  authDomain: "my-review-25584.firebaseapp.com",
  projectId: "my-review-25584",
  storageBucket: "my-review-25584.appspot.com",
  messagingSenderId: "1037004043897",
  appId: "1:1037004043897:web:2518bb8deea71c41dd46a8",
  measurementId: "G-9SPJZKLHP5",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebaseApp.auth();
const test = () => {
  console.log("test");
};

const dataRef = firestore.collection("cards");
const userRef = firestore.collection("users");

export default {
  firebase,
  firestore,
  auth,
  dataRef,
  userRef,
  test,
};

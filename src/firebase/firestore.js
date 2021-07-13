import firebase from "firebase";

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
const firestore = firebaseApp.firestore()

export default firestore
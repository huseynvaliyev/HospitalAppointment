import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCVMv_54rbK21yUsHFzBh2QoU5O-Es_eQI",
    authDomain: "hospitalappointment-a871d.firebaseapp.com",
    databaseURL: "https://hospitalappointment-a871d.firebaseio.com",
    projectId: "hospitalappointment-a871d",
    storageBucket: "hospitalappointment-a871d.appspot.com",
    messagingSenderId: "159994808172",
    appId: "1:159994808172:web:0f2e74d855e0e0b7009549"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
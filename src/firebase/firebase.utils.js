import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCBz2fh8wP0nzoaHOAnN5QjFKHZYhrFMX0",
    authDomain: "crwn-db-438b4.firebaseapp.com",
    databaseURL: "https://crwn-db-438b4.firebaseio.com",
    projectId: "crwn-db-438b4",
    storageBucket: "crwn-db-438b4.appspot.com",
    messagingSenderId: "184318414805",
    appId: "1:184318414805:web:75c541f62acd987712375c",
    measurementId: "G-BN3SEY40DX"
  };




firebase.initializeApp(config);

export const auth = firebase.auth();
//export const firestore = firestore.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase; 


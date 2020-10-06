import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA8IReUmutKyGtPZxetrde9vEuw0OZFUGQ",
    authDomain: "csc301-a1-a4f63.firebaseapp.com",
    databaseURL: "https://csc301-a1-a4f63.firebaseio.com",
    projectId: "csc301-a1-a4f63",
    storageBucket: "csc301-a1-a4f63.appspot.com",
    messagingSenderId: "361113582341",
    appId: "1:361113582341:web:5289f7350f86fd6e73156c"
};

firebase.initializeApp(config);
export default firebase;

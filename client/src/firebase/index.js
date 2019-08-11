const Firebase = require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyAz3VWv3xoHZQhMCsnjLmhOgLfn15aBcT8",
    authDomain: "roommate-a0a4d.firebaseapp.com",
    databaseURL: "https://roommate-a0a4d.firebaseio.com",
    projectId: "roommate-a0a4d",
    storageBucket: "gs://roommate-a0a4d.appspot.com",
    messagingSenderId: "268841424214",
    appId: "1:268841424214:web:d5e43f7dfc26ee31"
};
Firebase.initializeApp(firebaseConfig);

export default Firebase;
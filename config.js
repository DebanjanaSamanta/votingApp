import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyD-z1ladrEomE4w6PIYSCDkZ8xxSrJ0dZE",
        authDomain: "teamvotingapp-45d28.firebaseapp.com",
        databaseURL: "https://teamvotingapp-45d28-default-rtdb.firebaseio.com",
        projectId: "teamvotingapp-45d28",
        storageBucket: "teamvotingapp-45d28.appspot.com",
        messagingSenderId: "112980272745",
        appId: "1:112980272745:web:8c719deac06b113d73e4f8"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
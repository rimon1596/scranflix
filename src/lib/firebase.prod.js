import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBRE0NOvTi_lKqKLW9JlvRZOPIoPLj99Eg",
    authDomain: "sranflix.firebaseapp.com",
    projectId: "sranflix",
    storageBucket: "sranflix.appspot.com",
    messagingSenderId: "731798363686",
    appId: "1:731798363686:web:6d506c3e111bf0ff6990e7",
    measurementId: "G-FC485WC478"
};

const firebase = Firebase.initializeApp(config);

export { firebase };
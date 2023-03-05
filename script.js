import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY6zOUD2EkBX6vKnsAdKQqT10AwgEcgtM",
  authDomain: "penilaian-projek.firebaseapp.com",
  projectId: "penilaian-projek",
  storageBucket: "penilaian-projek.appspot.com",
  messagingSenderId: "488379652054",
  appId: "1:488379652054:web:f1f514a888b5163d607677",
  measurementId: "G-ZE0ZX44S7E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a Firestore instance
const db = firebase.firestore();

// Add a new document with a generated ID
db.collection("users").add({
    name: "John Doe",
    email: "johndoe@example.com",
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

// Read data from Firestore
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

const dbRef = firebase.database().ref();
console.log(dbRef);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
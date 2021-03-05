import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC4UMOC7IhsmiF8ufRMEjeq2by_hirA9Sk",
    authDomain: "slack-clone-26373.firebaseapp.com",
    databaseURL: "https://slack-clone-26373-default-rtdb.firebaseio.com",
    projectId: "slack-clone-26373",
    storageBucket: "slack-clone-26373.appspot.com",
    messagingSenderId: "38055820824",
    appId: "1:38055820824:web:c109416585947122780d6d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

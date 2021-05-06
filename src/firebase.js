import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDIY5nn4pAR0cu9133detEbHtCjRC4KmhU",
    authDomain: "disneyplus-web.firebaseapp.com",
    projectId: "disneyplus-web",
    storageBucket: "disneyplus-web.appspot.com",
    messagingSenderId: "682785907157",
    appId: "1:682785907157:web:b92848dd7a358754f6dd5c",
    measurementId: "G-CB7Q5KSRDS"
  };

const  firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const  auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;



  
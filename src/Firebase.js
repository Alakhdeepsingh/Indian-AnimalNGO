import { initializeApp } from "firebase/app";
import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcnpfrimteyXBmuLow1buU_TKJAJVKVqU",
  authDomain: "tree4me-652b1.firebaseapp.com",
  projectId: "tree4me-652b1",
  storageBucket: "tree4me-652b1.appspot.com",
  messagingSenderId: "400758728342",
  appId: "1:400758728342:web:03fd434ca48db0d52b84b7",
  measurementId: "G-HM45JE465B",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  // const [i,setI] = useState(0);
  try {
    const res = await signInWithPopup(auth, googleProvider);
    // alert("came")
    const user = res.user;
    // alert(user.displayName)
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log(user);
    localStorage.setItem("name", user.displayName);
    localStorage.setItem("email", user.email);
    window.location.reload();
    localStorage.setItem("pic", user.photoURL);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export default signInWithGoogle;

// // const firebaseApp = firebase.initializeApp({
// //     apiKey: "AIzaSyAcnpfrimteyXBmuLow1buU_TKJAJVKVqU",
// //     authDomain: "tree4me-652b1.firebaseapp.com",
// //     projectId: "tree4me-652b1",
// //     storageBucket: "tree4me-652b1.appspot.com",
// //     messagingSenderId: "400758728342",
// //     appId: "1:400758728342:web:03fd434ca48db0d52b84b7",
// //     measurementId: "G-HM45JE465B"
// // });
// // const db = firebaseApp.firestore();
// // const auth = firebase.auth();
// // const provider = new firebase.auth.GoogleAuthProvider();
// // export default db;

import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAba1v2bE9iV07tTw93n69SpsmFb77lZsQ",
  authDomain: "shopping-app-f76e8.firebaseapp.com",
  projectId: "shopping-app-f76e8",
  storageBucket: "shopping-app-f76e8.appspot.com",
  messagingSenderId: "278003702071",
  appId: "1:278003702071:web:40efa6a71e83816a8622b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider    = new GithubAuthProvider();
const db = getFirestore(app);
export { auth, googleProvider, githubProvider, db };
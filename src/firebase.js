import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe3iegaScUPEeBMHfQhQqJOlCjFCdYE7Y",
  authDomain: "login-authentication-4c945.firebaseapp.com",
  projectId: "login-authentication-4c945",
  storageBucket: "login-authentication-4c945.appspot.com",
  messagingSenderId: "969316985179",
  appId: "1:969316985179:web:d424179d25d20c6f05d27e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
//coustom hook
export function useAuth() {
  const [currentUser, setCrrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCrrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInWithGithub = () => {
  const gprovider = new GithubAuthProvider();
  signInWithGithub(auth, gprovider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInWithFacebook = () => {
  const fprovider = new FacebookAuthProvider();
  signInWithPopup(auth, fprovider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

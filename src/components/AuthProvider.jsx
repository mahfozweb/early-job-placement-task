// src/components/AuthProvider.jsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebase.config";
// import { auth } from "../firebase/firebase.config";

const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const registerUser = (email, password, displayName) =>
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      if (displayName) {
        return updateProfile(res.user, { displayName }).then(() => res);
      }
      return res;
    });

  // login
  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  //  sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // logout
  const logoutUser = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    signInWithGoogle,
    user,
    loading,
    registerUser,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

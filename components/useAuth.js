import React, { useState, useEffect } from "react";
import { firebaseInstance, authService } from "../fbInstance";

// Provider hook that creates auth object and handles state
export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setisLogin] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email, password) => {
    return await firebaseInstance
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        setisLogin(true);
        return response.user;
      });
  };
  const signup = async (email, password) => {
    return await firebaseInstance
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        setisLogin(true);
        return response.user;
      });
  };
  const signout = async () => {
    return await firebaseInstance
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };
  const sendPasswordResetEmail = (email) => {
    return firebaseInstance
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };
  const confirmPasswordReset = (code, password) => {
    return firebaseInstance
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  const signWithGoogle = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
  };

  const signWithGithub = async () => {
    const provider = new firebaseInstance.auth.GithubAuthProvider();
    await authService.signInWithPopup(provider);
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebaseInstance.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setisLogin(true);
      } else {
        setUser(null);
        setisLogin(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    isLogin,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signWithGoogle,
    signWithGithub,
  };
};

import "../styles/globals.css";
import Header from "../components/Header";
import Modal from "react-modal";
import React, { createContext, useContext } from "react";
import { useProvideAuth } from "../components/useAuth";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export default function App({ Component, pageProps }) {
  const { user, isLogin } = useProvideAuth();

  return (
    <div id="root">
      <authContext.Provider value={{ user, isLogin }}>
        {Modal.setAppElement("#root")}
        <Header />
        <Component {...pageProps} />
      </authContext.Provider>
      <footer>Jaewon's Devlog @Copyright All Rights Reserved</footer>
    </div>
  );
}

import "../styles/globals.css";
import Header from "../components/Header";
import styled from "styled-components";
import Modal from "react-modal";
const Footer = styled.footer`
  margin-top: 15rem;
  padding-top: 10rem;
  background-color: #020715;
  text-align: center;
  color: #abb6c4;
`;

export default function App({ Component, pageProps }) {
  return (
    <div id="root">
      {Modal.setAppElement("#root")}
      <Header />
      <Component {...pageProps} />
      <Footer>Jaewon's Devlog @Copyright All Rights Reserved</Footer>
    </div>
  );
}

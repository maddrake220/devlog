import "../styles/globals.css";
import Header from "../components/Header";
import styled from "styled-components";
const Footer = styled.div`
  opacity: 0.5;
  position: relative;
  text-align: center;
  margin-top: 10rem;
  bottom: 0;
  width: 100%;
`;
const Container = styled.div``;

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
      <Footer>Jaewon's Devlog @Copyright All Rights Reserved</Footer>
    </Container>
  );
}

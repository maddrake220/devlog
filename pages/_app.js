import "../styles/globals.css"
import Sidebar from "../components/Sidebar"
import styled from "styled-components"
import 'react-pro-sidebar/dist/css/styles.css';

const SidebarContainer = styled.div`
    position: fixed;
   height: 100%;
    display: flex;
    z-index: 12;
`;

export default function App({ Component, pageProps }) {
    return (
      <>
        <SidebarContainer>
          <Sidebar/>
        </SidebarContainer>
          <Component {...pageProps} />
      </>
    )
  }
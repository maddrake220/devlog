import Link from 'next/link'
import styled from "styled-components"
import Sidebar from "../pages/Sidebar"

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 60rem;
    padding: 0 1rem;
    margin: 0rem auto 6rem;
  `;
const BackToHome = styled.div`
  margin: 3rem 0 0;
`;

const SidebarContainer = styled.div`
    position: fixed;
    height: 100%;
    z-index: 10;
`;

const Button = styled.button`
  float:right;
`;
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {

  return (
    <>
    <SidebarContainer>
      <Sidebar/>
    </SidebarContainer>
    <Container>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </Container>
    </>
  )
}
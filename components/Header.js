import { useEffect } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { FaList } from "react-icons/fa";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);

  display: -webkit-box; /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */
  display: -moz-box; /* OLD: Firefox (buggy) */
  display: -ms-flexbox; /* MID: IE 10 */
  display: -webkit-flex; /* NEW, Chrome 21–28, Safari 6.1+ */
  display: flex; /* NEW: IE11, Chrome 29+, Opera 12.1+, Firefox 22+ */

  -webkit-box-align: center;
  -moz-box-align: center; /* OLD… */
  -ms-flex-align: center; /* You know the drill now… */
  -webkit-align-items: center;
  align-items: center;

  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;

  margin: 0;
  height: 120px;
  width: 100%; /* needed for Firefox */
`;
const Container = styled.div`
  display: inline-block;
  margin-left: 2rem;
  width: 80%;
`;

const Devlog = styled.div`
  font-size: 36px;
  bottom: 10;
  float: left;
  display: flex;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  &:hover {
    color: RED;
    text-decoration: none;
    opacity: 0.9;
  }
`;

const RightMenu = styled.div`
  visibility: visible;
  margin-top: 30px;
  display: flex;
  float: right;
  @media (max-width: 835px) {
    visibility: hidden;
  }
`;

const MenuIcon = styled.div`
  visibility: hidden;
  @media (max-width: 835px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    visibility: visible;
  }
`;

const Menu = styled.span`
  margin-left: 20px;
`;

export default withRouter(myHeader);

function myHeader({ router }) {
  return (
    <Header>
      <Container>
        <Devlog>
          <SLink href="/">
            <a>Jaewon's Devlog</a>
          </SLink>
        </Devlog>
        <RightMenu>
          <MenuIcon>
            <FaList />
          </MenuIcon>
          <SLink href="/about">
            <a>
              <Menu>ABOUT </Menu>
            </a>
          </SLink>

          <SLink href="/portfolio">
            <a>
              <Menu>PORTFOLIO</Menu>
            </a>
          </SLink>

          <SLink href="/posts">
            <a>
              <Menu>BLOG</Menu>
            </a>
          </SLink>

          <SLink href="/contact">
            <a>
              <Menu>CONTACT</Menu>
            </a>
          </SLink>
        </RightMenu>
      </Container>
    </Header>
  );
}

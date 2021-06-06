import { useEffect, useState } from "react";
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

  height: ${(props) => (props.isTop ? "120px" : "60px")};

  -webkit-backdrop-filter: blur(${(props) => (props.isTop ? "0px" : "15px")});
  backdrop-filter: blur(${(props) => (props.isTop ? "0px" : "15px")});
`;
const Container = styled.div`
  display: inline-block;
  margin-left: 2rem;
  width: 80%;
`;

const Devlog = styled.div`
  font-size: 36px;
  font-weight: 800;
  bottom: 10;
  float: left;
  display: flex;

  &:hover {
    text-decoration: none;
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
`;

const RightMenu = styled.div`
  visibility: visible;
  font-weight: 500;
  margin-top: 30px;
  display: flex;
  float: right;
  @media (max-width: 835px) {
    visibility: hidden;
  }
`;

const StyledA = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: none;
    opacity: 0.8;
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
  const [HeaderPostion, setHeaderPostion] = useState(true);

  const handlescroll = (e) => {
    setHeaderPostion(window.pageYOffset > 0 ? false : true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <Header isTop={HeaderPostion}>
      <Container>
        <Devlog>
          <SLink href="/">
            <StyledA>Jaewon's Devlog</StyledA>
          </SLink>
        </Devlog>
        <RightMenu>
          <MenuIcon>
            <FaList />
          </MenuIcon>
          <SLink href="/about">
            <StyledA>
              <Menu>ABOUT </Menu>
            </StyledA>
          </SLink>

          <SLink href="/portfolio">
            <StyledA>
              <Menu>PORTFOLIO</Menu>
            </StyledA>
          </SLink>

          <SLink href="/posts">
            <StyledA>
              <Menu>BLOG</Menu>
            </StyledA>
          </SLink>

          <SLink href="/contact">
            <StyledA>
              <Menu>CONTACT</Menu>
            </StyledA>
          </SLink>
        </RightMenu>
      </Container>
    </Header>
  );
}

import React from "react";
import styled from "styled-components";
import Link from "next/link";
const Container = styled.div`
  padding-top: 20rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0c2c52;
  z-index: 0;
`;
const Main = styled.div`
  position: relative;
  z-index: 1;
`;
const Photo = styled.div`
  border-radius: 9999px;
  background-image: url("/images/deno.jpg");
  width: 200px;
  height: 200px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
  }
`;
const Cigar = styled.span`
  position: absolute;
  bottom: 11px;
  right: 160px;
  border: 1px solid black;
  display: block;
  margin: 0 2px 50px;
  min-width: 6px;
  height: 20px;
  transform: skew(-50deg, 10deg);
  background-color: white;
`;
const Light = styled.span`
  position: absolute;
  bottom: 11px;
  right: 171px;
  display: block;
  margin: 0 2px 50px;
  min-width: 4px;
  height: 4px;
  background-color: red;
  border-radius: 50%;

  animation: animate2 3s linear infinite;

  @keyframes animate2 {
    50% {
      opacity: 0.9;
    }
    60% {
      opacity: 0.7;
    }
    70% {
      opacity: 0.6;
    }
    82% {
      opacity: 0.8;
    }
    92% {
      opacity: 0.7;
    }
    100% {
      opacity: 0.9;
    }
  }
`;

const Bubble = styled.div`
  position: absolute;
  bottom: 100px;
  left: 150px;
  width: 350px;
  text-align: center;
  line-height: 1.4em;
  margin: 40px auto;
  background-color: #fff;
  border: 4px solid #333;
  border-radius: 200px;
  font-family: sans-serif;
  padding: 30px;
  font-size: 14px;

  &:before {
    content: " ";
    position: absolute;
    left: 10px;
    bottom: -10px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 4px solid #333;
    -webkit-border-radius: 28px;
    -moz-border-radius: 28px;
    border-radius: 28px;
  }
  &:after {
    content: " ";
    position: absolute;
    bottom: -20px;
    background-color: #fff;
    border: 4px solid #333;
    width: 10px;
    height: 10px;
    left: 5px;
    -webkit-border-radius: 18px;
    -moz-border-radius: 18px;
    border-radius: 18px;
  }
`;
const Vapour = styled.span`
  position: absolute;
  bottom: 0px;
  right: 180px;
  display: block;
  margin: 0 2px 50px;
  min-width: 8px;
  height: 120px;
  background-color: whitesmoke;
  border-radius: 50%;
  animation: animate 9s linear infinite;
  opacity: 0;
  filter: blur(11px);

  @keyframes animate {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translateY(0) scaleX(1);
      opacity: 0;
    }
    65% {
      opacity: 1;
    }
    75% {
      transform: translateY(-150px) scaleX(5);
    }
    95% {
      opacity: 0;
    }
    100% {
      transform: translateY(-300px) scaleX(10);
    }
  }
`;

function index() {
  return (
    <Container>
      <Backdrop />
      <Main>
        <Photo />
        <Cigar></Cigar>
        <Light></Light>
        <Vapour></Vapour>
        <Bubble>
          <div>
            Github:
            <Link href="https://github.com/maddrake220/">
              <a target="_blank"> https://github.com/maddrake220/</a>
            </Link>
          </div>
          <div>Email : jwchoi4118@gmail.com</div>
        </Bubble>
      </Main>
    </Container>
  );
}

export default index;

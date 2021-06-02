import React from "react"
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  width: 100%;
  margin-left: 10rem;
`;
const Main = styled.div`
  text-align: center;
  padding-top: 5rem;
  width: 100%;
`;
const Title= styled.div`
  font-size: 48px;
  font-weight: 800;
`;

const Footer = styled.div`
  padding-top: 10rem;
`;
const Backdrop = styled.div`
  position: fixed;
  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("images/84533.jpg");
  background-position: center center;
  background-size: cover;
  z-index: 0;
`;
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <Container>
        <Title>
            Welcome 
        </Title>
          <Slider  {...settings}>
            <div><h2>1</h2></div>
            <div>2</div>
            <div>3</div>
          </Slider>
    </Container>
    <Footer>

    </Footer>
    </>
  )
}

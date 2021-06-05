import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import useScrollFadeIn from "../components/useScrollFadeIn";
import Section from "../components/Section";
import Thumbnail from "../components/Thumbnail";
import { getSortedPostsData } from "../lib/posts";
import { GrNext, GrPrevious } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("images/coffeelaptop.jpg");
  background-position: center center;
  background-size: cover;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  width: 42%;
  z-index: 1;
`;
const Title = styled.div`
  display: inline-block;
  width: 60%;
  padding-top: 20rem;
  font-size: 28px;
  font-weight: 800;
`;

const Some = styled.div`
  position: relative;
  margin-top: 40rem;
  font-size: 24px;
  font-weight: 800;
  width: 40%;
  height: 300px;
  opacity: 0;
  border: 2px solid black;
  transition: width 1s;
`;
const StyledSlider = styled(Slider)``;
const Portfoilo = styled.div``;
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 2,
  prevArrow: <GrPrevious />,
  nextArrow: <GrNext />,
};
export default function Home({ allPostsData }) {
  return (
    <Container>
      <Backdrop />
      <Content>
        <Title>프론트엔드 개발자 최재원의 개발 블로그입니다.</Title>
        <Some ref={useScrollFadeIn().ref}>asd</Some>
        <h2>Blog</h2>
        <Portfoilo>
          {allPostsData && allPostsData.length > 0 && (
            <StyledSlider {...settings}>
              {allPostsData.map((value) => (
                <Section imagesize={"250px"}>
                  <Thumbnail
                    id={value.id}
                    year={value.date}
                    title={value.title}
                    image={value.image}
                  />
                </Section>
              ))}
            </StyledSlider>
          )}
        </Portfoilo>
      </Content>
    </Container>
  );
}

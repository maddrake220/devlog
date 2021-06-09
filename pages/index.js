import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import useScrollFadeIn from "../components/useScrollFadeIn";
import Section from "../components/Section";
import Thumbnail from "../components/Thumbnail";
import { getSortedPostsData } from "../lib/posts";
import { GrNext, GrPrevious } from "react-icons/gr";
import Portfolio from "../components/Home/Portfolio";
import About from "../components/Home/About";
import { Projects, Abouts } from "../public/arrays";
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
  width: 56%;
  z-index: 1;
`;
const Title = styled.div`
  display: inline-block;
  width: 42%;
  padding-top: 25rem;
  font-size: 28px;
  font-weight: 800;

  @media (max-width: 835px) {
    width: 100%;
  }
`;

const AboutContainer = styled.div`
  position: relative;
  padding-top: 40rem;
  font-size: 18px;
  width: 99%;
  height: 300px;
  opacity: 0;
  transition: width 1s;
`;

const Blog = styled.div`
  padding-top: 20rem;
  opacity: 0;
`;

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: <GrPrevious />,
  nextArrow: <GrNext />,
  responsive: [
    {
      breakpoint: 1505,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 835,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const Pofol = styled.div`
  position: relative;
  padding-top: 20rem;
  opacity: 0;
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const observer_about = useScrollFadeIn().ref;
  const observer_portfolio = useScrollFadeIn().ref;
  const observer_blog = useScrollFadeIn().ref;
  return (
    <Container>
      <Backdrop />
      <Content>
        <Title>주니어 프론트엔드 개발자 최재원의 개발 블로그입니다.</Title>
        <AboutContainer ref={observer_about}>
          <h2>소개</h2>
          <br />
          <Section>
            {Abouts &&
              Abouts.map((about) => (
                <About
                  title={about.title}
                  innerCircle={about.innerCircle}
                  description={about.description}
                  fontsize={about.fontsize}
                  margintop={about.margintop}
                />
              ))}
          </Section>
        </AboutContainer>
        <Pofol ref={observer_portfolio}>
          <h2>포트폴리오</h2>
          <Section imagesize="500px">
            {Projects &&
              Projects.map((project) => (
                <Portfolio
                  title={project.title}
                  info={project.info}
                  info2={project.info2}
                  period={project.period}
                  description={project.description}
                  fontcolor={project.fontcolor}
                  image={project.image}
                  homepage={project.homepage}
                  isHome={true}
                  stacks={project.stacks}
                />
              ))}
          </Section>
        </Pofol>
        <Blog ref={observer_blog}>
          <h2>블로그</h2>
          {allPostsData && allPostsData.length > 0 && (
            <Slider {...settings}>
              {allPostsData.map((value) => (
                <Thumbnail
                  width="150px"
                  height="140px"
                  id={value.id}
                  year={value.date}
                  title={value.title}
                  image={value.image}
                />
              ))}
            </Slider>
          )}
        </Blog>
      </Content>
    </Container>
  );
}

import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import useScrollFadeIn from "../components/useScrollFadeIn";
import Section from "../components/Section";
import Thumbnail from "../components/Thumbnail";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import { GrNext, GrPrevious } from "react-icons/gr";
import Portfolio from "../components/Home/Portfolio";
import About from "../components/Home/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../lib/arrays";
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
  padding-top: 20rem;
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
  @media (max-width: 835px) {
    padding-top: 8rem;
  }
`;

const StyledSlider = styled(Slider)``;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: <GrPrevious />,
  nextArrow: <GrNext />,
};

export const Abouts = [
  {
    title: "재미",
    innerCircle: "Fun",
    description:
      "저는 개발이 일이지만 또한 재미있는 취미라고 생각합니다. 노력하는자, 타고난 자 위에 즐기는 자가 있다듯이 항상 즐기는 마음가짐 잊지 않도록 하겠습니다",
  },
  {
    title: "철저",
    innerCircle: "Thoroughly",
    description:
      "다양한 기기, 브라우저 등에 맞춰 사용자 친화적이고 스트레스 테스팅을 통해 최대한 버그없는 개발을 하겠습니다",
    fontsize: "30px",
    margintop: "58px",
  },
  {
    title: "트렌디",
    innerCircle: "Trendy",
    description:
      "모든 개발 분야가 그렇지만 특히 프론트엔드는 새로운 스펙 또는 버전업 등 매번 변화함에 따라 그에 맞춰 항상 새로운것을 공부하는 자세를 추구하도록 노력하겠습니다",
  },
  {
    title: "소통",
    innerCircle: "Communication",
    description:
      "복잡하고 거대해진 현재의 소프트웨어 개발은 어느 분야보다 소통이 중요하다고 생각합니다. 항상 소통을 최우선 하는 개발자가 되겠습니다",
    fontsize: "24px",
    margintop: "66px",
  },
];

export const ProjectsX = [
  {
    title: "Devlog",
    info: "Devlog",
    info2: "개인 프로젝트",
    period: "2021.05.04 ~ 2021.05.28",
    description: "포트폴리오, 포스트를 위한 블로그 개발",
    fontcolor: "#0070f3",
  },
  {
    title: "Madflix",
    info: "Madflix",
    info2: "Nomad Coder",
    period: "2021.05.04 ~ 2021.05.28",
    description: "Nomad Coder 영화 정보 WEB 코드 챌린지",
  },
  {
    title: "Madzon",
    info: "Madzon",
    info2: "inflern",
    period: "2021.05.04 ~ 2021.05.28",
    description: "온라인 쇼핑몰 boiler plate 클론 코딩",
    fontcolor: "white",
  },
  {
    title: "ToDo List",
    info: "ToDo List",
    info2: "개인 프로젝트",
    period: "2021.05.04 ~ 2021.05.28",
    description: "간단한 ToDo List 프로젝트",
    fontcolor: "yellow",
  },
];

const Pofol = styled.div`
  position: relative;
  padding-top: 20rem;
`;
export default function Home({ allPostsData }) {
  return (
    <Container>
      <Backdrop />
      <Content>
        <Title>주니어 프론트엔드 개발자 최재원의 개발 블로그입니다.</Title>
        <AboutContainer ref={useScrollFadeIn().ref}>
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
        <Pofol>
          <h2>포트폴리오</h2>
          <Section imagesize="500px">
            {ProjectsX &&
              ProjectsX.map((project) => (
                <Portfolio
                  title={project.title}
                  info={project.info}
                  info2={project.info2}
                  period={project.period}
                  description={project.description}
                  fontcolor={project.fontcolor}
                />
              ))}
          </Section>
        </Pofol>
        <Blog>
          <h2>블로그</h2>
          {allPostsData && allPostsData.length > 0 && (
            <StyledSlider {...settings}>
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
            </StyledSlider>
          )}
        </Blog>
      </Content>
    </Container>
  );
}

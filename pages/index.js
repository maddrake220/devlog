import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import useScrollFadeIn from "../components/useScrollFadeIn";
import Section from "../components/Section";
import Thumbnail from "../components/Thumbnail";
import { dbService } from "../fbInstance";
import { GrNext, GrPrevious } from "react-icons/gr";
import Portfolio from "../components/Portfolio";
import About from "../components/Home/About";
import { Projects, Abouts } from "../public/arrays";
import Head from "next/head";
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
  height: 120%;
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

export const getStaticProps = async () => {
  const res = await dbService.collection("post").get();
  const entry = res.docs.map((entry) => entry.data());
  if (entry.length) {
    return {
      props: {
        allPostsData: entry,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default function Home({ allPostsData }) {
  const observer_about = useScrollFadeIn().ref;
  const observer_portfolio = useScrollFadeIn().ref;
  const observer_blog = useScrollFadeIn().ref;
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="google-site-verification"
          content="3loVf6n_W27Duc4ecCTb0P7VcQkm84AjDAvHG9ggnQ0"
          key="title"
        />
      </Head>
      <Container>
        <Backdrop />
        <Content>
          <Title>????????? ??????????????? ????????? ???????????? ?????? ??????????????????.</Title>
          <AboutContainer ref={observer_about}>
            <h2>??????</h2>
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
            <h2>???????????????</h2>
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
            <h2>?????????</h2>
            {allPostsData && allPostsData.length > 0 && (
              <Slider {...settings}>
                {allPostsData.map((value) => (
                  <Thumbnail
                    id={value.id}
                    year={value.createdAt}
                    title={value.title}
                    image={value.attachmentUrl}
                  />
                ))}
              </Slider>
            )}
          </Blog>
        </Content>
      </Container>
    </>
  );
}

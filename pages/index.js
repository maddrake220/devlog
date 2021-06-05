import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import useScrollFadeIn from "../components/useScrollFadeIn";
import Section from "../components/Section";
import Thumbnail from "../components/Thumbnail";
import Image from "next/image";
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
  width: 56%;
  z-index: 1;
`;
const Title = styled.div`
  display: inline-block;
  width: 42%;
  padding-top: 20rem;
  font-size: 28px;
  font-weight: 800;
`;

const About = styled.div`
  position: relative;
  margin-top: 40rem;
  font-size: 18px;
  width: 99%;
  height: 300px;
  opacity: 0;
  transition: width 1s;
`;

const Portfolio = styled.div`
  padding-top: 20rem;
`;

const Blog = styled.div`
  padding-top: 20rem;
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

const Circle = styled.div`
  margin-left: 1.5rem;
  height: 185px;
  width: 185px;
  color: white;
  background-color: black;
  border-radius: 9999px;
`;

const InnerCircle = styled.div`
  font-size: ${(props) => (props.fontsize ? props.fontsize : "46px")};
  padding-top: ${(props) => (props.margintop ? props.margintop : "50px")};
  display: inline-block;
`;
const Description = styled.h5`
  text-align: left;
`;
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
        <Title>쥬니어 프론트엔드 개발자 최재원의 개발 블로그입니다.</Title>
        <About ref={useScrollFadeIn().ref}>
          <h2>소개</h2>
          <br />
          <Section>
            <div>
              <h4>재미</h4>
              <Circle>
                <InnerCircle>Fun</InnerCircle>
              </Circle>
              <Description>
                저는 개발이 일이지만 또한 재미있는 취미라고 생각합니다. 노력하는
                자, 타고난 자 위에 즐기는 자가 있다듯이 항상 즐기는 마음가짐
                잊지 않도록 하겠습니다
              </Description>
            </div>

            <div>
              <h4>철저</h4>
              <Circle>
                <InnerCircle fontsize="30px" margintop="58px">
                  Thoroughly
                </InnerCircle>
              </Circle>
              <Description>
                다양한 기기, 브라우저 등에 맞춰 사용자 친화적이고 스트레스
                테스팅을 통해 최대한 버그없는 개발을 하겠습니다
              </Description>
            </div>
            <div>
              <h4>트렌드</h4>
              <Circle>
                <InnerCircle>Trendy</InnerCircle>
              </Circle>
              <Description>
                모든 개발 분야가 그렇지만 특히 프론트엔드는 새로운 스펙 또는
                버전업 등 매번 변화함에 따라 그에 맞춰 항상 새로운것을 공부하는
                자세를 추구하도록 노력하겠습니다{" "}
              </Description>
            </div>
            <div>
              <h4>소통</h4>
              <Circle>
                <InnerCircle fontsize="24px" margintop="66px">
                  Communication
                </InnerCircle>
              </Circle>
              <Description>
                복잡하고 거대해진 현재의 소프트웨어 개발은 어느 분야보다 소통이
                중요하다고 생각합니다. 항상 소통을 최우선 하는 개발자가
                되겠습니다
              </Description>
            </div>
          </Section>
        </About>
        <Portfolio>
          <h2>포트폴리오</h2>
        </Portfolio>
        <Blog>
          <h2>블로그</h2>
          {allPostsData && allPostsData.length > 0 && (
            <StyledSlider {...settings}>
              {allPostsData.map((value) => (
                <Section imagesize={"342px"}>
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
        </Blog>
      </Content>
    </Container>
  );
}

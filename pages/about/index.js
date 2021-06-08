import React from "react";
import About from "../../components/Home/About";
import Stack from "./Stack";
import styled from "styled-components";
import Section from "../../components/Section";
import { Abouts, Stacks } from "../../public/arrays";
const Container = styled.div`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  width: 60%;
`;

const AboutContainer = styled.div``;

const StackContainer = styled.div`
  padding-top: 10rem;
`;

const Resume = styled.div`
  font-size: 15px;
  font-weight: 600;
  padding-top: 10rem;
  display: flex;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const ItemContainer = styled.div`
  padding-left: 30px;
  display: flex;
`;
const Item = styled.div`
  height: auto;
  margin-left: 1rem;
`;

const Photo = styled.div`
  width: 30%;
  height: 300px;
  border-radius: 9999px;
  background-image: url("images/deno.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
function index() {
  return (
    <Container>
      <Content>
        <AboutContainer>
          <h2>개발 자세</h2>
          <Section paddingleft="3rem">
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

        <StackContainer>
          <h2>기술 스택</h2>
          <Section paddingleft="2rem" imagesize="120px">
            {Stacks &&
              Stacks.map((stack) => (
                <Stack
                  title={stack.title}
                  bgUrl={stack.image}
                  rate={stack.rate}
                  description={stack.description}
                />
              ))}
          </Section>
        </StackContainer>

        <Resume>
          <Photo />
          <Grid>
            <ItemContainer>
              <Item>2011.03 ~ 2018.02</Item>
              <Item>인천대학교 컴퓨터 공학 졸업</Item>
            </ItemContainer>
            <ItemContainer>
              <Item>2018.04 ~ 2019.04</Item>
              <Item>미국 오하이오주 USHair It Engineer 인턴</Item>
            </ItemContainer>
            <ItemContainer>
              <Item>SQLD 자격증</Item>
              <Item>정보처리기사 자격증</Item>
            </ItemContainer>

            <ItemContainer>
              <Item>프론트엔드 공부</Item>
              <Item>각종 프로젝트 개발 진행중... </Item>
            </ItemContainer>
          </Grid>
        </Resume>
      </Content>
    </Container>
  );
}

export default index;

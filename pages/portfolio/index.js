import React from "react";
import { Projects, Stacks } from "../../public/arrays";
import Portfolio from "../../components/Portfolio";
import styled from "styled-components";
const Container = styled.div`
  margin-top: 15rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  width: 50%;
`;

export default () => (
  <Container>
    <Content>
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
            isHome={false}
            stacks={project.stacks}
            post={project.post}
          />
        ))}
    </Content>
  </Container>
);

/*
title: "Devlog",
    info: "Devlog",
    info2: "개인 프로젝트",
    period: "2021.05.04 ~ 2021.05.28",
    description: "포트폴리오, 포스트를 위한 블로그 개발",
    fontcolor: "#0070f3",
    homepage: "https://devlog-maddrake.vercel.app/",
    image: "devlog.jpg"
*/

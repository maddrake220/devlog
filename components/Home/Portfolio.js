import React from "react";
import styled from "styled-components";

const Project = styled.div`
  position: relative;
  width: 100%;
  height: 110px;
  border-radius: 10px;
  box-sizing: content-box;
  display: flex;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const Project_Image = styled.div`
  color: ${(props) => (props.fontcolor ? props.fontcolor : "red")};
  position: relative;
  text-align: center;
  background-color: black;
  left: 2%;
  top: 20%;
  width: 30%;
  height: 60%;
`;

const Project_Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  padding-top: 11px;
`;
const Project_Info0 = styled.div`
  position: relative;
  text-align: justify;
  width: 50%;
  padding-left: 3rem;
`;

const Project_Info = styled.div`
  font-weight: 800;
  padding-top: 1rem;
`;
const Project_Info2 = styled.div`
  font-size: 13px;
`;
const Project_Period = styled.div`
  position: absolute;
  bottom: 1.3rem;
  font-size: 3px;
`;

const Project_Description = styled.div`
  position: absolute;
  color: gray;
  font-size: 15px;
  font-weight: 600;
  right: 2rem;
  bottom: 6px;
  width: 20%;
  height: 80%;
`;

const Portfolio = (Props) => {
  return (
    <Project>
      <Project_Image fontcolor={Props.fontcolor}>
        <Project_Title>{Props.title}</Project_Title>
      </Project_Image>
      <Project_Info0>
        <Project_Info>{Props.info}</Project_Info>
        <Project_Info2>{Props.info2}</Project_Info2>
        <Project_Period>{Props.period}</Project_Period>
      </Project_Info0>
      <Project_Description>{Props.description}</Project_Description>
    </Project>
  );
};

export default Portfolio;

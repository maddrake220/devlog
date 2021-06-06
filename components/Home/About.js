import React from "react";
import styled from "styled-components";
const Title = styled.h4``;
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

const About = (Props) => {
  return (
    <div>
      <Title>{Props.title}</Title>
      <Circle>
        <InnerCircle fontsize={Props.fontsize} margintop={Props.margintop}>
          {Props.innerCircle}
        </InnerCircle>
      </Circle>
      <Description>{Props.description}</Description>
    </div>
  );
};

export default About;

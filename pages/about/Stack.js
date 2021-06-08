import React from "react";
import styled from "styled-components";

const StackContainer = styled.div`
  position: relative;
`;
const StackImage = styled.div`
  position: relative;
  top: 0;
  left: 10px;
  width: auto;
  height: 100px;
  background-image: url(${(props) => `/images/${props.bgUrl}`});
  background-repeat: no-repeat;
  background-size: contain;
`;
const Title = styled.div`
  font-size: 20px;
  color: grey;
  font-weight: 700;
  padding-top: 11px;
  padding-bottom: 30px;
`;

const Rating = styled.div`
  position: absolute;
  left: 15px;
  bottom: 0;
`;
function Stack(Props) {
  return (
    <StackContainer>
      <StackImage bgUrl={Props.bgUrl} />
      <Title>{Props.title}</Title>
      <Rating>
        <meter
          max="10"
          min="0"
          value={Props.rate}
          high="7"
          low="3"
          optimum="10"
        ></meter>
      </Rating>
    </StackContainer>
  );
}

export default Stack;

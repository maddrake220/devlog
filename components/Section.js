import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: ${(props) => (props.paddingleft ? props.paddingleft : "0")};
  padding-top: 2rem;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

/* :not(:last-child) : 마지막 children에게는 ~하지 않는다*/
const Grid = styled.div`
  border-radius: 2px;
  margin-top: 2;
  display: grid;

  grid-template-columns: repeat(
    auto-fill,
    ${(props) => (props.imagesize ? props.imagesize : "240px")}
  );
  grid-gap: 30px;
`;
const Section = ({ paddingleft, imagesize, children }) => (
  <Container paddingleft={paddingleft}>
    <Grid imagesize={imagesize}>{children}</Grid>
  </Container>
);

export default Section;

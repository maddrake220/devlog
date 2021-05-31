import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding-top: 6rem;
    padding-left: 2rem;
    z-index: 1;
    width: 60%;
    margin: 0 auto;
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.h2`
`;
/* :not(:last-child) : 마지막 children에게는 ~하지 않는다*/
const Grid = styled.div`
    border-radius: 2px;
    margin-top: 2;
    display:grid;
    grid-template-columns:repeat(auto-fill, 320px);
    grid-gap: 30px;
`;
const Section = ({children}) => (
    <Container>
        <Title>포스트</Title>
        <Grid>{children}</Grid>
    </Container>
);

export default Section;
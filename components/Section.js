import React from "react";
import styled from "styled-components";

const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
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
        <Grid>{children}</Grid>
    </Container>
);

export default Section;
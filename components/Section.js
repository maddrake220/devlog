import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding-top: 3rem;
    :not(:last-child) {
        margin-bottom: 50px;
    }
    
`;

const Footer = styled.div`
    position: relative;
    margin-top: 10rem;
    bottom: 0;
    height: 100px;
    width: 90%;
`;
/* :not(:last-child) : 마지막 children에게는 ~하지 않는다*/
const Grid = styled.div`
    border-radius: 2px;
    margin-top: 2;
    display:grid;
    grid-template-columns:repeat(auto-fill, 340px);
    grid-gap: 30px;
`;
const Section = ({children}) => (
    <>
    <Container>
        <Grid>{children}</Grid>
    </Container>
    
     <Footer>
            @2021 JaewonChoi's devlog. All Rights Reserved.
      </Footer>
    </>
);

export default Section;
import React from "react";
import styled from "styled-components";
import Link from "next/link";
const Container = styled.div`
  padding-top: 37rem;
  width: 20%;
`;
const Linktext = styled.div`
  position: sticky;
  float: left;
  top: 12rem;
`;
const LinkContainer = ({ postData }) => {
  return (
    <Container>
      <Linktext>
        {postData.link &&
          postData.link.map((item) => (
            <div>
              <Link href={`${item.id}`}>
                <a>{item.name}</a>
              </Link>
            </div>
          ))}
      </Linktext>
    </Container>
  );
};

export default LinkContainer;

import React from "react";
import styled from "styled-components";
import Posts from "../../components/Posts";
import { dbService } from "../../fbInstance";
const Container = styled.div`
  position: relative;
  width: 100%;
  padding-left: 10rem;

  @media (max-width: 1005px) {
    padding-left: 4rem;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("images/posts.jpg");
  background-position: center center;
  background-size: cover;
  filter: blur(5px);
  z-index: 0;
  opacity: 0.7;
`;

export const getStaticProps = async () => {
  const res = await dbService.collection("post").get();
  const entry = res.docs.map((entry) => entry.data());
  if (entry.length) {
    return {
      props: {
        allPostsData: entry,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
export default function index({ allPostsData }) {
  return (
    <>
      <Backdrop />
      <Container>
        <Posts allPostsData={allPostsData} postSize="340px" />
      </Container>
    </>
  );
}

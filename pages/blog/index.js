import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { dbService } from "../../fbInstance";
import Thumbnail from "../../components/Thumbnail";
import Section from "../../components/Section";

const Container = styled.div`
  display: flex;
  margin-top: 15rem;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
const ResultArea = styled.div`
  flex-direction: column;
  align-items: center;
  text-align: justify;
  width: 80%;
`;
export const getStaticProps = async () => {
  const res = await dbService.collection("post").get();
  const entry = res.docs.map((entry) => entry.data());
  if (entry.length) {
    return {
      props: {
        entry: entry,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
function index({ entry }) {
  return (
    <Container>
      <ResultArea>
        <Section imagesize="340px">
          {entry.map((item) => (
            <Thumbnail
              title={item.title}
              id={item.id}
              image={item.thumbnail}
              content={item.sub_title}
              tag={item.tags}
            />
          ))}
        </Section>
      </ResultArea>
    </Container>
  );
}

export default index;

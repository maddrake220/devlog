import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { dbService } from "../../fbInstance";

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
  width: 50%;
`;

const Title = styled.div`
  font-size: 90px;
`;
export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await dbService.collection("post").where("id", "==", id).get();
  const entry = res.docs.map((entry) => entry.data());
  if (entry.length) {
    return {
      props: {
        entry: entry[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export async function getStaticPaths() {
  const entries = await dbService.collection("post").get();
  const paths = entries.docs.map((entry) => ({
    params: {
      id: entry.data().id,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
function index({ entry }) {
  return (
    <Container>
      {
        <ResultArea>
          <Head>
            <title>{entry.title}</title>
          </Head>

          <Title>{entry.title}</Title>
          <ReactMarkdown remarkPlugins={[gfm]} children={entry.text} />
        </ResultArea>
      }
    </Container>
  );
}

export default index;

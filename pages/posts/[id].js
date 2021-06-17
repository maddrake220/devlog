import Head from "next/head";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { dbService } from "../../fbInstance";
import { GetDateFormatted } from "../../components/getDateFormatted";
import Commentarea from "../../components/Commentarea";
import LinkContainer from "../../components/LinkContainer";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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

const Footer = styled.div`
  margin-top: 20rem;
`;

const SDate = styled.div`
  margin-top: 6rem;
`;
const Title = styled.div`
  font-size: 100px;
`;

const Article = styled.article`
  padding-top: 10rem;
`;

const TagContainer = styled.div`
  margin: 2rem;
`;

const Tag = styled.div`
  background-color: green;
  color: white;
  display: inline-block;
  box-sizing: border-box;
  padding: 3px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await dbService.collection("post").where("id", "==", id).get();
  const entry = res.docs.map((entry) => entry.data());
  if (entry.length) {
    return {
      props: {
        postData: entry[0],
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

export default function Post({ postData }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dbService
      .collection("comment")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const commentArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentArray);
      });
  }, []);

  return (
    <>
      <Container>
        <ResultArea>
          <Head>
            <title>{postData.title}</title>
          </Head>

          <Title>{postData.title}</Title>
          <TagContainer>
            {postData.tags && postData.tags.map((item) => <Tag>{item}</Tag>)}
          </TagContainer>
          <SDate>{GetDateFormatted(postData.createdAt)}</SDate>

          <Article>
            <ReactMarkdown remarkPlugins={[gfm]} children={postData.text} />
          </Article>
          <LinkContainer postData={postData} />
          <Commentarea comments={comments} postData={postData} />
        </ResultArea>
      </Container>
      <Footer></Footer>
    </>
  );
}

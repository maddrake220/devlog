import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { dbService } from "../../fbInstance";
import DateToString from "../../components/date";
import Commentarea from "../../components/Commentarea";
import LinkContainer from "../../components/LinkContainer";
const Container = styled.div`
  display: flex;
`;

const Footer = styled.div`
  margin-top: 20rem;
`;
const Hr = styled.hr`
  float: left;
  width: 70%;
  border-style: solid;
  color: black;
`;

const PostContainer = styled.div`
  padding-top: 8rem;
  width: 40%;
  margin: 0 auto;
  margin-right: 10rem;
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
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
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
        <PostContainer>
          <Head>
            <title>{postData.title}</title>
          </Head>

          <Title>{postData.title}</Title>
          <TagContainer>
            {postData.tag &&
              postData.tag.map((item, index) => <Tag>{item}</Tag>)}
          </TagContainer>
          <SDate>
            <DateToString dateString={postData.date} />
          </SDate>
          <Hr />
          <Article>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </Article>
        </PostContainer>
        <LinkContainer postData={postData} />
      </Container>
      <Commentarea comments={comments} postData={postData} />
      <Footer></Footer>
    </>
  );
}

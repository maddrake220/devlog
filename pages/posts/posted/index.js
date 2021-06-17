import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

import { dbService } from "../../../fbInstance";
function index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService
      .collection("post")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const postsArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsArray);
      });
  }, []);

  return (
    <Container>
      <ResultArea>
        {posts &&
          posts.map((item) => (
            <ReactMarkdown remarkPlugins={[gfm]} children={item.text} />
          ))}
      </ResultArea>
    </Container>
  );
}

export default index;

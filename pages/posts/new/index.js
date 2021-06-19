import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../_app";
import AuthForm from "../../../components/AuthForm";
import { MarkedInput } from "../../../components/NewPost/markedInput";
import { Result } from "../../../components/NewPost/result";
import EditorContext from "../../../components/NewPost/editorContext";

const Container = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextEditor = styled.div`
  width: 80%;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function NewPost() {
  const [markdownText, setMarkdownText] = useState("");
  const auth = useAuth();

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <>
      {auth.user === null && auth.isLogin === null ? (
        <div></div>
      ) : auth.user !== null && auth.isLogin === true ? (
        <>
          <EditorContext.Provider value={contextValue}>
            <Container>
              <TextEditor>
                <Title>새 포스트</Title>
                <EditorContainer>
                  <MarkedInput />
                  <Result />
                </EditorContainer>
              </TextEditor>
            </Container>
          </EditorContext.Provider>
        </>
      ) : (
        <AuthForm />
      )}
    </>
  );
}

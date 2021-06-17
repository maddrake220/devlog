import React, { useState } from "react";
import styled from "styled-components";
import { MarkedInput } from "../../../components/NewPost/markedInput";
import { Result } from "../../../components/NewPost/result";
import EditorContext from "../../../components/NewPost/editorContext";
const AppContainer = styled.div`
  padding-top: 10rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>새 포스트</Title>
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}

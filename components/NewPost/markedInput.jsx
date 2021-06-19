import React, { useState, useContext } from "react";
import styled from "styled-components";
import editorContext from "./editorContext";
import { useAuth } from "../../pages/_app";
import { dbService, storageService } from "../../fbInstance";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { FiUpload } from "react-icons/fi";
const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 1000px;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

const Save = styled.input`
  margin: 5px;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  float: right;
  color: white;
  border: none;
  background-color: teal;
  border-radius: 3px;
  cursor: pointer;
`;

const NewTitle = styled.input`
  width: 80%;
  height: 67px;
  font-size: 45px;
  border: none;
  margin-bottom: 5px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const NewSubTitle = styled.textarea`
  width: 80%;
  height: 70px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const NewThumbNail_upload = styled.input``;

const NewThumbNail = styled.div`
  width: 20%;
`;

const NewThumbNail_img = styled.div`
  position: relative;
  background-image: url(${(props) => props.image});
  width: 150px;
  height: 150px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const TitleArea = styled.div`
  position: relative;
  display: flex;
`;

const Remove = styled.span`
  cursor: pointer;
`;

const Filebox = styled.div`
  display: flex;
  color: #999;
`;
export function MarkedInput() {
  const auth = useAuth();
  const router = useRouter();
  const { markdownText, setMarkdownText } = useContext(editorContext);
  const [attachment, setAttachment] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };
  const onChangeTitle = (e) => {
    const {
      target: { id, value },
    } = e;
    if (id === "post_Title") {
      setTitle(value);
    } else if (id === "post_Sub_Title") {
      setSubTitle(value);
    }
  };
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachmentClick = (e) => {
    const AttachedFile = document.getElementById("onFileChange");
    AttachedFile.value = null;
    setAttachment("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!auth.isLogin) {
      router.push("/login");
      return;
    }
    if (title === "") {
      alert("제목을 입력하세요");
      return;
    }
    if (markdownText === "") {
      alert("내용을 입력하세요");
      return;
    }

    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService.ref().child(uuidv4());
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }

    const commentObj = {
      id: uuidv4(),
      text: markdownText,
      creatorId: auth.user.email,
      creatorName: auth.user.displayName,
      title: title,
      sub_title: subTitle,
      tags: ["react", "Javascript", "Node.js"],
      createdAt: Date.now(),
      attachmentUrl,
    };
    await dbService.collection("post").add(commentObj);
    setMarkdownText("");
    setAttachment("");
    setTitle("");
    setSubTitle("");
    router.push("/blog");
  };

  return (
    <Container>
      <TitleArea>
        <div>
          <NewTitle
            placeholder="제목을 입력하세요"
            id="post_Title"
            type="text"
            onChange={onChangeTitle}
            value={title}
          />
          <NewSubTitle
            placeholder="짧은 소개를 적어주세요"
            id="post_Sub_Title"
            type="text"
            onChange={onChangeTitle}
            value={subTitle}
          />
        </div>
        <NewThumbNail>
          썸네일 이미지
          <Filebox>
            <NewThumbNail_upload
              id="onFileChange"
              type="file"
              accept="image/*"
              onChange={onFileChange}
            />
          </Filebox>
          {attachment && (
            <>
              <NewThumbNail_img image={attachment} />
              <div
                className="factoryForm__clear"
                onClick={onClearAttachmentClick}
              >
                <Remove>Remove</Remove>
              </div>
            </>
          )}
        </NewThumbNail>
      </TitleArea>

      <Title>Markdown 입력창</Title>
      <TextArea placeholder="## 제목" onChange={onInputChange} />
      <form onSubmit={onSubmit}>
        <Save type="submit" value="포스트" />
      </form>
    </Container>
  );
}

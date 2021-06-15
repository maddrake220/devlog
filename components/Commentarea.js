import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../pages/_app";
import { useRouter } from "next/router";
import { dbService } from "../fbInstance";
const CommentArea = styled.div`
  display: flex;
  padding-top: 4rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const Comment = styled.div`
  position: relative;
  text-align: justify;
  padding: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const StyledComment = styled.input`
  border-radius: 20px;
  border: none;
  width: 700px;
  height: 100px;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;
const Profile = styled.div`
  display: flex;
`;
const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 44px;
  height: 44px;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 9999px;
`;

const Username = styled.span`
  font-weight: 650;
  font-size: 16px;
  color: #121319;
`;

const Text = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  font-weight: 350;
  font-size: 19px;
  color: black;
`;
const StyledSubmit = styled.div`
  float: right;
`;

const CommentMenu = styled.div`
  position: absolute;
  right: 0;
  bottom: 6px;
`;

const CMenu = styled.span`
  font-size: 12px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const StyledSubmitComment = styled.input`
  background-color: yellow;
  border: none;
  padding: 0.7rem;
  margin: 10px;
  border-radius: 5px;
  background-color: teal;
  color: whitesmoke;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
const Profile_Info = styled.div`
  margin-left: 18px;
`;
const CommentDate = styled.div`
  font-size: 9px;
`;

const EditText = styled.input`
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 20px;
`;

const EditTextSubmit = styled.input`
  margin: 5px;
  padding: 10px;
  font-weight: 700;
  float: right;
  color: white;
  border: none;
  background-color: teal;
  border-radius: 3px;
  cursor: pointer;
`;
const getDateComment = (date) => {
  const commentdate = new Date(date);
  const day = commentdate.getDate();
  const month = commentdate.getMonth();
  const hours = commentdate.getHours();
  const year = commentdate.getFullYear();
  const minutes = commentdate.getMinutes();
  const seconds = commentdate.getSeconds();

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
};
const Commentarea = ({ comments, postData }) => {
  const [newComment, setNewComment] = useState("");
  const [editedComment, setEditedComment] = useState("");
  const [editing, setEditing] = useState(false);
  const auth = useAuth();
  const router = useRouter();
  const onDeleteClick = async (e) => {
    const confirm = window.confirm("댓글을 삭제 하시겠습니까 ?");
    if (confirm) {
      await dbService.doc(`comment/${comments[0].id}`).delete();
    }
  };

  const onEditTextChange = (e) => {
    const {
      target: { value },
    } = e;
    setEditedComment(value);
  };
  const onTextEditSubmit = async (e) => {
    e.preventDefault();
    await dbService.doc(`comment/${comments[0].id}`).update({
      text: editedComment,
    });
    setEditing(false);
    setEditedComment("");
  };
  const toggleEditing = (value) => {
    setEditedComment(value);
    setEditing((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!auth.isLogin) {
      router.push("/login");
      return;
    }
    if (newComment === "") {
      alert("내용을 입력하세요");
      return;
    }

    const commentObj = {
      text: newComment,
      creatorId: auth.user.email,
      creatorName: auth.user.displayName,
      post_id: postData.id,
      photoURL: auth.user.photoURL,
      createdAt: Date.now(),
    };
    await dbService.collection("comment").add(commentObj);
    setNewComment("");
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewComment(value);
  };

  return (
    <CommentArea>
      <div>
        <form onSubmit={onSubmit}>
          <StyledComment
            id="comment"
            type="text"
            onChange={onChange}
            value={newComment}
            placeholder="소중한 댓글을 남겨주세요"
          />
          <br />
          <StyledSubmit>
            <StyledSubmitComment type="submit" value="댓글 작성" />
          </StyledSubmit>
        </form>
        <div style={{ marginTop: 80 }}>
          {comments &&
            comments.map(
              (comment) =>
                comment.post_id === postData.id && (
                  <Comment>
                    <Profile>
                      <Image
                        bgUrl={
                          comment.photoURL
                            ? comment.photoURL
                            : "/images/deno.jpg"
                        }
                      />
                      <Profile_Info>
                        <Username>{comment.creatorName}</Username>
                        <CommentDate>
                          {getDateComment(comment.createdAt)}
                        </CommentDate>
                      </Profile_Info>
                    </Profile>
                    <Text>
                      {editing ? (
                        <form onSubmit={onTextEditSubmit}>
                          <EditText
                            type="text"
                            value={editedComment}
                            onChange={onEditTextChange}
                          ></EditText>
                          <EditTextSubmit
                            type="submit"
                            value="수정 완료"
                          ></EditTextSubmit>
                        </form>
                      ) : (
                        comment.text
                      )}
                    </Text>
                    {comment.creatorId === auth?.user?.email && (
                      <CommentMenu>
                        <CMenu
                          onClick={() => toggleEditing(comment.text)}
                          id="update"
                        >
                          {editing ? "취소" : "수정"}
                        </CMenu>
                        {!editing && (
                          <CMenu onClick={onDeleteClick} id="delete">
                            삭제
                          </CMenu>
                        )}
                      </CommentMenu>
                    )}
                  </Comment>
                )
            )}
        </div>
      </div>
    </CommentArea>
  );
};

export default Commentarea;

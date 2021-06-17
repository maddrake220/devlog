import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../pages/_app";
import { dbService, storageService } from "../fbInstance";

const Text = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  font-weight: 350;
  font-size: 19px;
  color: black;
`;

const CommentMenu = styled.div`
  position: absolute;
  padding: 5px;
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

const EditText = styled.input`
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 20px;

  &:focus {
    outline: none;
  }
`;

const EditTextSubmit = styled.input`
  color: white;
  margin-right: 10px;
  padding: 10px;
  position: absolute;
  bottom: 3px;
  right: 30px;
  border: none;
  background-color: teal;
  border-radius: 3px;
  cursor: pointer;
`;

const Commentmenu = ({ comment }) => {
  const auth = useAuth();
  const [editing, setEditing] = useState(false);
  const [editedComment, setEditedComment] = useState("");

  const onDeleteClick = async (e) => {
    const confirm = window.confirm("댓글을 삭제 하시겠습니까 ?");
    if (confirm) {
      await dbService.doc(`comment/${comment.id}`).delete();
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
    await dbService.doc(`comment/${comment.id}`).update({
      text: editedComment,
    });
    setEditing(false);
    setEditedComment("");
  };
  const toggleEditing = (value) => {
    setEditedComment(value);
    setEditing((prev) => !prev);
  };

  return (
    <div>
      <Text>
        {editing ? (
          <form onSubmit={onTextEditSubmit}>
            <EditText
              type="text"
              value={editedComment}
              onChange={onEditTextChange}
            ></EditText>
            <EditTextSubmit type="submit" value="수정 완료"></EditTextSubmit>
          </form>
        ) : (
          comment.text
        )}
      </Text>
      {comment.creatorId === auth?.user?.email && (
        <CommentMenu>
          <CMenu onClick={() => toggleEditing(comment.text)} id="update">
            {editing ? "취소" : "수정"}
          </CMenu>
          {!editing && (
            <CMenu onClick={onDeleteClick} id="delete">
              삭제
            </CMenu>
          )}
        </CommentMenu>
      )}
    </div>
  );
};

export default Commentmenu;

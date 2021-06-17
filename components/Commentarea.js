import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../pages/_app";
import { useRouter } from "next/router";
import { dbService } from "../fbInstance";
import { GetDateFormatted } from "./getDateFormatted";
import Commentmenu from "./Commentmenu";
const CommentArea = styled.div`
  display: flex;
`;
const Comment = styled.div`
  padding: 20px;
  position: relative;
  text-align: justify;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const StyledComment = styled.input`
  border-radius: 20px;
  border: none;
  width: 750px;
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

const StyledSubmit = styled.div`
  float: right;
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

const Commentarea = ({ comments, postData }) => {
  const [newComment, setNewComment] = useState("");
  const auth = useAuth();
  const router = useRouter();
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
                          {GetDateFormatted(comment.createdAt)}
                        </CommentDate>
                      </Profile_Info>
                    </Profile>
                    <Commentmenu comment={comment} />
                  </Comment>
                )
            )}
        </div>
      </div>
    </CommentArea>
  );
};

export default Commentarea;

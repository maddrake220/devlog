import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { dbService } from "../../fbInstance";
import { useAuth } from "../_app";
import DateToString from "../../components/date";
import { useRouter } from "next/router";
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

const LinkContainer = styled.div`
  padding-top: 37rem;
  width: 20%;
`;

const Linktext = styled.div`
  position: sticky;
  float: left;
  top: 12rem;
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
const Comment = styled.div`
  position: relative;
  text-align: justify;
  padding: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;
const CommentArea = styled.div`
  display: flex;
  padding-top: 4rem;
  text-align: center;
  align-items: center;
  justify-content: center;
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
const CommentMenuClick = (e) => {
  console.log(e);
  const {
    target: { id },
  } = e;
  if (id === "update") {
    console.log(id);
  } else {
    console.log(id);
  }
};
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
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const auth = useAuth();
  const router = useRouter();

  console.log(auth);
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
        <LinkContainer>
          <Linktext>
            {postData.link &&
              postData.link.map((item, index) => (
                <div>
                  <Link href={`${item.id}`}>
                    <a>{item.name}</a>
                  </Link>
                </div>
              ))}
          </Linktext>
        </LinkContainer>
      </Container>
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
                      <Text>{comment.text}</Text>
                      {comment.creatorId === auth?.user?.email && (
                        <CommentMenu>
                          <CMenu onClick={CommentMenuClick} id="delete">
                            수정
                          </CMenu>
                          <CMenu onClick={CommentMenuClick} id="update">
                            삭제
                          </CMenu>
                        </CommentMenu>
                      )}
                    </Comment>
                  )
              )}
          </div>
        </div>
      </CommentArea>

      <Footer></Footer>
    </>
  );
}

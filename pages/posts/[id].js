import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { dbService } from "../../fbInstance";

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
  const [user_id, setUser_id] = useState("");
  const [user_pass, setUser_pass] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dbService.collection("comment").onSnapshot((snapshot) => {
      const commentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentArray);
    });
  }, []);

  const onSubmit = async (e) => {
    if (newComment === "") {
      return;
    }
    e.preventDefault();

    const commentObj = {
      text: newComment,
      creatorId: user_id,
      creatorPass: user_pass,
    };
    await dbService.collection("comment").add(commentObj);
  };

  const onChange = (e) => {
    const {
      target: { id, value },
    } = e;
    console.log(id);
    if (id === "user_id") {
      setUser_id(value);
    } else if (id === "user_password") {
      setUser_pass(value);
    } else if (id === "comment") {
      setNewComment(value);
    }
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
            <Date dateString={postData.date} />
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
          <div style={{ marginTop: 30 }}>
            {comments &&
              comments.map((comment) => (
                <div>
                  <span>{comment.creatorId}</span>
                  <span>{comment.text}</span>
                  <button>deleteComment</button>
                  <button>updateComment</button>
                </div>
              ))}
          </div>
        </div>
      </CommentArea>

      <Footer></Footer>
    </>
  );
}

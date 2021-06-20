import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useAuth } from "../pages/_app";
import Section from "./Section";
import Thumbnail from "./Thumbnail";

const PostContainer = styled.div`
  text-align: center;
  padding-top: 5rem;
  z-index: 10;
  width: auto;
`;

const Title = styled.div`
  padding-top: 5rem;
  margin-right: 10rem;
  font-size: 30px;
`;
const Items = styled.div`
  padding-top: 2rem;
  margin-left: 2rem;
  display: flex;
`;

const Tag = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: black;
  display: inline-block;
  box-sizing: border-box;
  padding: 3px;
  margin-right: 10px;
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
  &:active {
    background-color: aqua;
  }
`;

const NewPost = styled.span`
  float: right;
  margin-right: 100px;
  border-radius: 15px;
  padding: 0.4rem;
  background-color: black;
`;
const Posts = ({ allPostsData, postSize }) => {
  const [Tags, setTags] = useState([]);
  const [Filter, setFilter] = useState("");
  const [isFilter, setisFilter] = useState(false);
  const auth = useAuth();
  let Arr = [];
  let ReducedArr = [];
  useEffect(() => {
    allPostsData.map(
      (item) =>
        item.tags &&
        item.tags.filter((element, index) => {
          Arr.push(element);
        })
    );
    console.log(ReducedArr);
    ReducedArr = Arr.reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );
    setTags(ReducedArr);
  }, [allPostsData]);

  const TagChangeHandler = (value) => {
    setFilter(value);
    console.log(Filter);
    setisFilter(true);
  };

  const NoFilter = () => {
    setisFilter(false);
  };
  return (
    <PostContainer>
      <Title>포스트</Title>
      <Items>
        <Tag onClick={() => NoFilter()}>All</Tag>
        {Tags &&
          Tags.map((item) => (
            <Tag current={item} onClick={() => TagChangeHandler(item)}>
              {item}
            </Tag>
          ))}
      </Items>
      {auth.isLogin && (
        <NewPost>
          <Link href="/posts/new">
            <a style={{ color: "white" }}>새 포스트 작성</a>
          </Link>
        </NewPost>
      )}
      <br />
      <br />
      <br />
      {isFilter ? (
        <Section imagesize={postSize}>
          {allPostsData &&
            allPostsData
              .filter((element) => {
                return element.tags && element.tags.includes(Filter);
              })
              .map((value) => (
                <Thumbnail
                  id={value.id}
                  year={value.createdAt}
                  title={value.title}
                  image={value.attachmentUrl}
                  content={value.sub_title}
                  tag={value.tags ? value.tags : ""}
                />
              ))}
        </Section>
      ) : (
        <Section imagesize={postSize}>
          {allPostsData &&
            allPostsData.map((value) => (
              <Thumbnail
                id={value.id}
                year={value.createdAt}
                title={value.title}
                image={value.attachmentUrl}
                content={value.sub_title}
                tag={value.tags ? value.tags : ""}
              />
            ))}
        </Section>
      )}
    </PostContainer>
  );
};

export default Posts;

import React, {useState, useEffect} from "react"
import { getSortedPostsData } from '../../lib/posts'
import Section from "../../components/Section"
import Thumbnail from '../../components/Thumbnail'
import styled from "styled-components"
import Link from "next/link"
const Container = styled.div`
  width: 100%;
`;

const PostContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 70%;
  margin-left: 20rem;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("images/posts.jpg");
  background-position: center center;
  background-size: cover;
  filter: blur(5px);
  z-index: 0;
  opacity: 0.7;
`;

const Title = styled.div`
  padding-top: 5rem;
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
    &:active{
                background-color: aqua;
            }
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Posts({ allPostsData }) {
    const [Tags, setTags] = useState([])
    const [Filter, setFilter] = useState("")
    const [isFilter, setisFilter] = useState(false)
    let Arr = []
    let ReducedArr = []
    useEffect(() => {
          
        allPostsData.map(item => item.tag && item.tag.filter((element, index) => { Arr.push(element)}) )
        
        ReducedArr = Arr.reduce((unique, item) => 
                unique.includes(item) 
                ? unique 
                : [...unique, item], [])
        setTags(ReducedArr)

        
    }, [allPostsData])

    const TagChangeHandler = (value) => {
      setFilter(value)
      console.log(Filter)
      setisFilter(true)
    }

    const NoFilter = () => {
      setisFilter(false)
    }
    return (
      <>
      <Backdrop/>
      <Container>
        <PostContainer>
          <Title>포스트</Title>
              <Items>
                <Tag onClick={()=>NoFilter()}>All</Tag>
                  {Tags && Tags.map(item => 
                          <Tag current={item} onClick={()=>TagChangeHandler(item)}>{item}</Tag>
                  )}
              </Items>
              {isFilter 
              ? 
              <Section>
                  {allPostsData && allPostsData.filter(element => {return element.tag && element.tag.includes(Filter)}).map(value => (
                    <Thumbnail 
                      id={value.id}
                      year={value.date}
                      title={value.title}
                      image={value.image}
                      content={value.description}
                      tag={value.tag? value.tag : ""}
                      /> 
                      
                  ))}
                </Section>
              :
              <Section>
                  {allPostsData && allPostsData.map(value => (
                    <Thumbnail 
                      id={value.id}
                      year={value.date}
                      title={value.title}
                      image={value.image}
                      content={value.description}
                      tag={value.tag? value.tag : ""}
                      /> 
                      
                  ))}
                </Section>}
              
                
        </PostContainer>
      </Container>
      </>
    )
  }
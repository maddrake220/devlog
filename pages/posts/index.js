import { getSortedPostsData } from '../../lib/posts'
import Section from "../../components/Section"
import Thumbnail from '../../components/Thumbnail'
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Posts({ allPostsData }) {
    return (
      <Container>
        <Backdrop/>
                <Section>
                  {allPostsData && allPostsData.map(({ id, date, title, image, description, tag, link }) => (
                    <Thumbnail 
                      id={id}
                      year={date}
                      title={title}
                      image={image}
                      content={description}
                      tag={tag? tag : ""}
                      />
                      
                  ))}
                </Section>
      </Container>
    )
  }
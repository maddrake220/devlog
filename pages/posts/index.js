import { getSortedPostsData } from '../../lib/posts'
import Section from "../../components/Section"
import Thumbnail from '../../components/Thumbnail'
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  padding: 3rem 22rem;

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
              <h2>포스트</h2>
                <Section>
                  {allPostsData && allPostsData.map(({ id, date, title, image, description, category }) => (
                    <Thumbnail 
                      id={id}
                      year={date}
                      title={title}
                      image={image}
                      content={description}
                      category={category? category : ""}
                      />
                      
                  ))}
                </Section>
      </Container>
    )
  }
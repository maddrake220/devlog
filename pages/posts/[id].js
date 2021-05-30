import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from "../../components/date"
import utilStyles from '../../styles/utils.module.css'
import styled from "styled-components"
import Sidebar from '../Sidebar'

const Container = styled.div`
  display: inline-block;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 3rem;
`;
const SidebarContainer = styled.div`
    position: fixed;
    height: 100%;
    z-index: 10;
`;
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

export default function Post({ postData }) {
    return (
      <>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      
      <Layout>
        <Container>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        
                <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml }} />
          
            </article>
        </Container>
      </Layout>
      </>
    )
  }


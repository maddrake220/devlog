import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Section from "../components/Section"
import Thumbnail from '../components/thumbnail'


/*

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  return res.json()
}

*/

/*
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
// If you need to fetch data at request time instead of at build time, you can try Server-side Rendering:
*/

/*
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
//  React hook for data fetching called SWR. We highly recommend it if you’re fetching data on the client side.
//  It can you when do like : Private, user-specific pages where SEO is not relevant 
*/
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          <Section>
            {allPostsData && allPostsData.map(({ id, date, title, image, description }) => (
              <Thumbnail 
                id={id}
                year={date}
                title={title}
                image={image}
                content={description}
                />
                
            ))}
          </Section>
        </ul>
      </section>
    </Layout>
  )
}
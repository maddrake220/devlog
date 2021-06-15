---
title: "Next.js : pre-rendering"
date: "2021-05-29"
image: "/images/nextjs.webp"
tag: ["React", "Next.js"]
description: "Next.js는 두가지 pre-rendering 형태를 가지고 있다 : Static Generation 과 Server-side Rendering.
이 두가지의 차이점은 언제 page에 HTML을 generate를 하느냐에 따라 다르다"
link:
  [
    { id: "#head", name: "Nextjs 의 Rendering" },
    { id: "#body1", name: "Static Generation" },
    { id: "#body2", name: "Server-side Rendering" },
    { id: "#body3", name: "SWR" },
    { id: "#end", name: "마무리" },
  ]

---

### Nextjs 의 Rendering <a name="head"></a>

Next.js는 **Static Generation** 과 **Server-side Rendering**라는 두가지 pre-rendering 형태를 가지고 있다.  
이 두가지 형태의 차이점은 **언제** page에 HTML을 generate를 하느냐에 따라 다르다

### <a name="body1"></a>

- **Static Generation** 은 **빌드 타임** 에 pre-rendering한다. 기본적으로 getStaticProps 함수를 사용한다.
<pre>
<code>
    export async function getStaticProps() {
        const data = getData() // 커스텀 함수
        return {
            props: {
                data
            }
        }
    }
</code>
</pre>

### <a name="body2"></a>

- **Server-side Rendering** 은 **각 요청**에 따라 pre-rendering한다.  
만약 **빌드 타임** 대신 **Request time**에 data를 fetch하고 싶으면 getServerSideProps 함수를 사용할 수 있다.
<pre>
<code>
    export async function getServerSideProps(context) {
        const data = getData() // 커스텀 함수
        return {
            props: {
                data
            }
        }
    }
</code>
</pre>

### <a name="body3"></a>

- 추가) **SWR** : data fetching을 위한 React hook  
  Client Side에서 data fetching 할 때 사용한다. Private정보나, 유저정보, SEO가 필요없는 상황에서 쓰면 좋다.
  <pre>
  <code>
          import useSWR from 'swr'
  
          function Profile() {
            const { data, error } = useSWR('/api/user', fetch)
  
            if (error) return console.log("failed to load")
            if (!data) return console.log("loading...")
          }
  </code>  
  </pre>

### <a name="end"></a>

중요한 점은, 각 페이지의 필요에따라 **선택**하여 pre-rendering을 할 수 있다는 것이다. **Static Generation**을 통해 대부분의 페이지를 작성하고 **Server-side Rendering**을 다른 페이지를 작성하여 **hybrid Next.js app** 을 만들 수 있다.
<br><br><br>

출처: Next.js 공식 튜토리얼

---
title: "Devlog"
date: "2020-06-15"
image: "/images/devlog.jpg"
tag: ["Project"]
description: "Devlog는 프론트엔드 개발 공부를 하면서 습득한 스킬들을 기록하기 위해 만든 웹 블로그 입니다. 추후 지속적인 업데이트를 통해 프로젝트를 완성할 계획입니다."
link:
  [
    { id: "#head", name: "Devlog 프로젝트 개요" },
    { id: "#body1", name: "소개" },
    { id: "#body2", name: "적용기술" },
    { id: "#end", name: "마치며" },
  ]
---

### <a name="head"></a>

<br/><br/><br/>

## Devlog 프로젝트 개요

![alt text](/images/devlog.jpg "Title")

- ### Devlog

  #### Devlog는 프론트엔드 개발 공부를 하면서 습득한 스킬들을 기록하기 위해 만든 웹 블로그 입니다. 추후 지속적인 업데이트를 통해 프로젝트를 완성할 계획입니다.

## 프로젝트 소개

<br/><br/><br/>

### <a name="body1"></a>

<br/><br/><br/>

- 홈 화면
  1. Observator를 이용해 스크롤시 이벤트 구현
  2. react-slick 을 이용한 carousel

![alt text](/images/devlog.jpg "Home")

- 로그인 화면
  1. firebase와 연동하여 login 구현
  2. google, github 로 시작하기 구현

![alt text](/images/devlog_home.jpg "login")

- ABOUT
  guage bar를 통해 기술 게이지 표시

![alt text](/images/devlog_about.jpg "about")

- PORTFOLIO  
  mordal 창을 통해 프로젝트 세부 정보 표시

![alt text](/images/devlog_portfolio.jpg "pofol")

- BLOG

1. markdown id별로 Grid형식으로 구현
2. category 별 search 기능

![alt text](/images/devlog_post.jpg "blog")

- Post by ID

![alt text](/images/devlog_post_id.png "post")

1. side bar Navigation 구현 -> 수정 예정
2. Login 기반 댓글 구현

- 포스팅 기능 구현

![alt text](/images/blog_posting.jpg "posting")

1. TItle, Sub_title, Thumbnail 등록
2. Markdown으로 작성하면 실시간 적용 화면 표시
3. Draft.js 같은 text editor 라이브러리를 통해 텍스트 에디팅 기능 구현 예정

![alt text](/images/devlog_contact.jpg "contact")

- CONTACT  
  css Animation을 구현

<br/><br/><br/>

### <a name="body2"></a>

<br/><br/><br/>

## 적용기술

- Framework : Next
- Language : ES6
- Database: firebase
- Styling: styled-components
- deploy : vercel
- Etc : Markdown

<br/><br/><br/>

### <a name="end"></a>

<br/><br/><br/>

## 마치며

##### Devlog 사이드 프로젝트를 진행하면서 Nextjs 공부와 functional Programming, Firebase와 같은 noDB,noSQL 에 대해 많은 공부를 할수 있었습니다.

##### 또한 SSR과 CSR 동작 원리, SEO를 위한 Google robots 와 Google Search Console 등 여러 개념에 대해서도 알게되는 계기가 되었습니다.

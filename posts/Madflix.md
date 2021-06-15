---
title: "Madflix"
date: "2020-05-24"
image: "/images/devlog.jpg"
tag: ["Project"]
description: "Madflix는 Nomadcoder Code Challenge 프로그램을 통해 개발 한 첫번째 React 프로젝트 입니다. Moviedb restAPI를 기반으로 영화 정보를 볼 수 있는 웹 사이트 입니다."
link:
  [
    { id: "#head", name: "프로젝트 개요" },
    { id: "#body1", name: "프로젝트 소개" },
    { id: "#body2", name: "사용 스킬" },
    { id: "#end", name: "마치며" },
  ]
---

### <a name="head"></a>

<br/><br/><br/>

### Madflix 프로젝트 개요

- #Madflix  
  Madflix는 Nomadcoder Code Challenge 프로그램을 통해 개발 한 첫번째 React 프로젝트 입니다. Moviedb restAPI를 기반으로 영화 정보를 볼 수 있는 웹 사이트 입니다.

### <a name="body1"></a>

<br/><br/><br/>

### 프로젝트 소개

- 홈 화면

1. YT API를 이용해 Autostart, Pause, Mute 기능 구현
2. Styled-components 를 이용해 sticky background와 Poster구현

![alt text](/images/madflix.jpg "Title")

- Movie 화면

1. MovieDB API를 axios를 사용해 Movie의 각 섹션별로 fetching
2. Poster hovering시 Animation 구현

![alt text](/images/madflix_movies.jpg "Title")

- TV 화면

1. MovieDB API를 axios를 사용해 TV Show의 각 섹션별로 fetching
2. Poster hovering시 Animation 구현

![alt text](/images/madflix_tvs.jpg "Title")

- Detail 화면

1. 별점 기능 구현
2. Tab 기능 구현 : Tab별로 각각 정보, 제작사, 클립, 시리즈 기능 구현
   ![alt text](/images/madflix_detail.jpg "Title")

- Search 화면

1. 검색 기능 구현

![alt text](/images/madflix_search.jpg "Title")

### 사용 스킬

- Framework : React
- Language : Javascript
- Styling: styled-components
- API : restFul API, Youtube API
- Deploy : netlify

### 마치며

- 제 첫번쨰 프로젝트인 만큼 정말 많은 것들을 배울 수 있었고 특히 React의 Rendering 방식, 순서와 JSX 문법, Class Components 의 단점과 Functional 방식을 지향해야 하는 이유 등에 대해 많이 알게 되었습니다.

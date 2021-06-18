# React, Next.js, Css(styled-components), Markdown 을 활용한 개발 블로그 devlog 개발

---
## Devlog 프로젝트 개요

- ### Devlog

  #### Devlog는 프론트엔드 개발 공부를 하면서 습득한 스킬들을 기록하기 위해 만든 웹 블로그 입니다. 추후 지속적인 업데이트를 통해 프로젝트를 완성할 계획입니다.

## 프로젝트 소개

![devlog](https://user-images.githubusercontent.com/83238246/122579541-fab50480-d08f-11eb-9c1c-7cde74b0fee4.jpg)

- 홈 화면
  1. Observator를 이용해 스크롤시 이벤트 구현
  2. react-slick 을 이용한 carousel

![devlog_home](https://user-images.githubusercontent.com/83238246/122579549-fc7ec800-d08f-11eb-8ad7-39be78daeda8.jpg)

- 로그인 화면
  1. firebase와 연동하여 login 구현
  2. google, github 로 시작하기 구현

![devlog_about](https://user-images.githubusercontent.com/83238246/122579545-fbe63180-d08f-11eb-85f3-a31f3c26b991.jpg)

- ABOUT
  guage bar를 통해 기술 게이지 표시

![devlog_about](https://user-images.githubusercontent.com/83238246/122579545-fbe63180-d08f-11eb-85f3-a31f3c26b991.jpg)

- PORTFOLIO  
  mordal 창을 통해 프로젝트 세부 정보 표시

![devlog_portfolio](https://user-images.githubusercontent.com/83238246/122579550-fc7ec800-d08f-11eb-9ab2-7bd4618ce9b1.jpg)

- BLOG

1. markdown id별로 Grid형식으로 구현
2. category 별 search 기능

![devlog_post](https://user-images.githubusercontent.com/83238246/122579553-fd175e80-d08f-11eb-8b87-a88fd3d9d883.jpg)

- Post by ID

![devlog_post_id](https://user-images.githubusercontent.com/83238246/122579556-fd175e80-d08f-11eb-9fbc-5c9a522cc3a1.png)

1. side bar Navigation 구현 -> 수정 예정
2. Login 기반 댓글 구현

- 포스팅 기능 구현

![devlog_blog_posting](https://user-images.githubusercontent.com/83238246/122579644-128c8880-d090-11eb-89e2-150a6a290ca3.jpg)

1. TItle, Sub_title, Thumbnail 등록
2. Markdown으로 작성하면 실시간 적용 화면 표시
3. Draft.js 같은 text editor 라이브러리를 통해 텍스트 에디팅 기능 구현 예정

![devlog_contact](https://user-images.githubusercontent.com/83238246/122579547-fbe63180-d08f-11eb-9a4b-461389da6444.jpg)

- CONTACT  
  css Animation을 구현

## 적용기술

- Framework : Next
- Language : ES6
- Database: firebase
- Styling: styled-components
- deploy : vercel
- Etc : Markdown


## 마치며

##### Devlog 사이드 프로젝트를 진행하면서 Nextjs 공부와 functional Programming, Firebase와 같은 noDB,noSQL 에 대해 많은 공부를 할수 있었습니다.

##### 또한 SSR과 CSR 동작 원리, SEO를 위한 Google robots 와 Google Search Console 등 여러 개념에 대해서도 알게되는 계기가 되었습니다.





---
## To Do list

- [x] 대공사
- [x] 포스트 Card view로 구현:  
       Image,
      Title,
      Description,  
       post Date
- [x] 헤더 추가
      Home link,
      About link,
      Portfolio link,
      Blog link,
      Contact link
- [x] Home 구현:
      About 요약,
      포트폴리오 요약 => modal창 추가,
      Blog 요약
- [x] 포스트 디테일에서 리모콘 구현
- [x] Tag 별 sorting 구현
- [x] 프로젝트 컴포넌트 구현
- [x]] Info 구현:  
   간단한 나의 정보,  
   기술스택, 자기소개
- [x] contact 페이지 구현

---

## 수정 해야 할 사항

- [x] 포스트 : a 태그 헤더 가리는 문제
- [x] 포스트 : 포스트 추가, 내용 수정
- [x] 포트폴리오 : 내용 수정, 이미지 추가
- [x] Firebase DB 연동
- [x] Login
- [x] social login 구현
- [x] context를 이용한 auth 상태 관리
- [x] 포스트 : realtime Comment 기능
- [x] comment 로그인 유저 기반으로 변경
- [x] comment 수정/ 삭제 구현
- [x] home observer기능 bug 수정
- [x] SEO

- [x] Blog 포스팅 기능 구현
- [x] 댓글 중복 수정되는 버그 수정
- [x] 댓글 삭제안되는 버그 수정
- [x] 새 포스트에 썸네일 구현
- [x] 새 포스트와 포스트에 Title, sub_title 등등 구현
- [x] 로그인 시 포스트 만들기 추가, direct new 로그인 검증 추가
- [] 새 포스트와 포스트에 image upload 구현
- [] 새 포스트와 포스트에 link 구현
- [] 포스트 수정, 삭제 기능 구현
- [] 전체 테스팅
- 

---
title: "Firebase (1)"
date: "2020-06-10"
image: "/images/firebase.webp"
tag: ["Firebase"]
description: "TypeScript를 사용하는 가장 큰 이유 중 하나는 정적 타입을 지원한다는 것이다. TypeScript는 정적 타입을 지원하므로 컴파일 단계에서 오류를 포착할 수 있는 장점이 있다. 명시적인 정적 타입 지정은 개발자의 의도를 명확하게 코드로 기술할 수 있다."
link:
  [
    { id: "#head", name: "Firebase, 사용 이유" },
    { id: "#body1", name: "Firebase on React" },
    { id: "#body2", name: "Firebase 사용" },
  ]
---

### <a name="head"></a>

<br/><br/><br/>

### Firebase 사용 이유

- firebase 란 ?  
  Firebase는 Serverless BaaS (Backend as a Service) 기반 Nosql 클라우드 데이터베이스 입니다.

- friebase 사용 이유

### <a name="body1"></a>

<br/><br/><br/>

### Firebase on React

- React에서 Firebase Configuration 방법

npm i firebase

<pre>
  <code>
  //.env
  REACT_APP_API_KEY=AIzaSyDU38Ar8ioBY3qscYk4D-poTMbflkBIKS
  REACT_APP_AUTH_DOMAIN=maditter-9e9d0.firebaseapp.co
  REACT_APP_PROJECT_ID=maditter-9e9d
  REACT_APP_STORAGE_BUCKET=maditter-9e9d0.appspot.co
  REACT_APP_MSEEAGING_SENDER_ID=16870701135
  REACT_APP_APP_ID=1:168707011353:web:dbe75844f0befdd76f8b8
  </code>
</pre>

- .env
  git 에 키가 노출되는 것을 방지하기 위해 .env파일에 값 정의

* 주의 사항
  1. root파일에 .env 생성
  2. React에서 .env에 정의된 값을 사용하기 위해서는 <<REACT*APP* + 환경변수명>> 같은 형식으로 정의
  3. API_key error 발생 시 yarn add dotenv 다운로드

### <a name="body2"></a>

<br/><br/><br/>

- firebase 사용하기

<pre>
  <code>
  //fbInstance.js
  import firebase from "firebase";
  import "firebase/auth";

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MSEEAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
  
  firebase.initializeApp(firebaseConfig); // initailizing firebase

  export const authService = firebase.auth(); // Autu()
  </code>
</pre>

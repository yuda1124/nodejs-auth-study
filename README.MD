# Session, Cookie

## 쿠키와 세션을 사용하는 이유

1. HTTP 프로토콜의 특징 때문 (Connectionless, Stateless)

## Cookie란?

- UNIX 프로그래머들이 사용했던 것으로, 프로그램이 데이터 수신 후 변경하지 않은 채로 반환하는 데이터의 패킷을 의미하는 `매직 쿠키` 라는 용어에서 비롯되었다.
- 하이퍼 텍스트의 기록서로, 웹사이트로부터 전송된 사용자의 브라우저를 이용해 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일
- 쿠키는 string으로 이루어진 `Key-value` 쌍의 값으로 4kb를 넘길 수 없음

## Cookie의 종류

1. Session Cookie
   - in-memory cookie 라고도 알려져있는 세션쿠키는 사용자가 웹사이트를 사용할 때만 존재하고, 브라우저를 닫게 되면 지워진다. expiration date가 없고 브라우저가 자동적으로 관리한다.
2. Persistent Cookie
   - expiration date가 있어서 특정 시간이 흘러야 만료된다.

## Cookie의 목적

1. Session 관리 (Session Management)
   - 로그인, 사용자 닉네임, 장바구니 등 서버가 알아야할 정보 저장
2. 개인화 (Personalization)
   - 사용자마다 그 사람에게 적절한 페이지 보여줄 수 있음
3. 트래킹 (Tracking)
   - 사용자의 행동과 패턴 분석하고 기록

### Cookie 사용방법

1. Client가 서버에 정보를 요청하면 Server는 저장하고 싶은 key-value를 cookie로 만들어 header에 담아 보낸다.

```jsx
Set-Cookie: <cookie-key>: <cookie-value>
```

2. Client는 Server로 전송하는 모든 요청에 현재 브라우저에 있는 쿠키를 header에 담아 보낸다.

```jsx
Cookie: <cookie-key>: <cookie-value>
```

3. 브라우저가 종료되도 유지시키고 싶다면? Persistent Cookie를 사용하면 된다.

```jsx
Set-Cookie: yummy_cookie=choco; Expires=Wed, 21 Oct 2020 07:28:00 GMT;
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e38f4838-e7c7-45bc-b1d9-6e62a58ad912/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e38f4838-e7c7-45bc-b1d9-6e62a58ad912/Untitled.png)

[https://velog.io/@onikss793/Session-Login](https://velog.io/@onikss793/Session-Login)

[https://nesoy.github.io/articles/2017-03/Session-Cookie](https://nesoy.github.io/articles/2017-03/Session-Cookie)

## cookie-parser

```jsx
$ yarn add cookie-parser
```

### API

```jsx
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
```

- cookieParser(secret, options)
  - secret[optional]
    - cookie를 서명하기 위한 string이나 array, 지정하지 않으면 parsing하지 않는다.
    - string이 주어지면 secret 문자열로 사용된다.
    - array가 주어지면 각자의 secret으로 쿠키를 unsign하려고 시도한다.

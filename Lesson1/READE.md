# Cloning Youtube with VanillaJS and NodeJS

## 2.0 ~ 2.7

- 2.0 what is a Server
- 2.1 what is Express
- 2.2 installing Express with NPM
- 2.3 Your First Express Server
- 2.4 Handling Routes with Express
- 2.5 ES6 on NodeJs using Babel
- 2.6 Exprss Core: Middlewares
- 2.7 Express Core: Middlewares part Two
- 2.8 Express Core: Routing

### install

- npm init <= package.json 만들기
- npm install express <= express 패키지 설치
- npm install @babel/node
- npm install @babel/core
- npm install @babel/preset-env

### babel이란?

1. ES6,7 -> ES5이하의 코드로 transpile 시켜주는 transpiler (최신 자바스크립트기능을 제공안해주는 브라우저를 위해)

2. compile과 달리, transpile은 같은 언어를 유지한체 다른 런타임에서 해당 코드가 정상적으로 해석될 수 있도록 형태만 바꿔준다는 차이가 있다.

3. 크롬, 사파리, 파이어폭스와 같은 에버그린 브라우저(Evergreen browser, 사용자의 업데이트 없이도 최신 버전으로 자동 업데이트를 수행하는 모던 브라우저)의 ES6지원 비율은 약 98%로 거의 대부분의 ES6 사양을 구현. IE는 11%로 답이없다.

4. Babel은 다양한 모듈을 담는 일종의 상자 역할을 하며 코드를 컴파일 하기 위해 작은 모듈들(ex. presets)을 사용

### @babel/preset-env

1. Babel을 사용하려면 @babel/preset-env을 설치해야 한다. @babel/preset-env은 함께 사용되어야 하는 Babel 플러그인을 모아 둔 것으로 Babel 프리셋이라고 부른다. 공식 babel 프리셋은 여러종류가 있으며 @babel/preset-env도 공식 babel 프리셋이고 필요한 플러그인 들을 프로젝트 지원 환경에 맞춰서 동적으로 결정해 준다

2. 바벨 설정은 여러 플러그인을 스스로 조합하거나 미리 준비된 프리셋을 사용할 수가 있다. 여기서 env는 가장 범용적으로 사용되는 프리셋이다.

3. @babel/preset-env을 사용하기 위해선 .babelrc 파일안에 밑에 코드를 넣어준다.

```node
{
  "presets": ["@babel/preset-env"]
}
```

### Router

1. router 란 route의 복잡함을 깨주는데 사용한다.

2. add.use("/", useRouter)에서 use의 의미는 라우트("/" <- 이런것)을 사용하면 useRouter안에 있는 모든 Router을 쓰겠다라는 뜻이다.

```javascript
import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
```

3. Routing의 의미는 엔드포인트 url이용하여 응답, 요청을 받는 것을 말한다.

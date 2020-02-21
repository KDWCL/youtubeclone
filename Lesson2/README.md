# Cloning Youtube with VanillaJS and NodeJS

## MVC

M data
V how does the data look <- 데이터가 어떻게 생겼는지
C function that looks for the data <- 데이터를 찾는 함수

## 코드 이해

- init.js

- app.js

- routes.js

- routes 디렉토리 안에 globalRouter.js, userRouter.js, videoRouter.js

- controllers 디렉토리 안에 userController.js, videoController.js

1. 실행 순서
   init.js => app.js => routes.js => routes 디렉토리

2. routes.js를 만든 이유
   예를들어 나중에 해당 url로 가게되는 버튼이 있다면 url을 코드를 뒤져서 찾아야되기 때문에 하나에 알기쉽게 모아둔다.

3. const VIDEO_DETAIL = "/:id";
   :id 라고 url에 지정해주면 express에서 변하는 값으로 인지하게 된다.

4. controller를 만들어주고 응답해줄 페이지들을 넣는다
   userController <= userRouter, globalRouter(home, search)
   videoController <= videoRouter, globalRouter(join, login, logout)

## VSC 단축키

- command alt 방향키 (한번에 적을때)

- alt shift 방향키 (단어 드래그)

- command 방향키 (해당 줄의 끝으로)

import express from 'express';
import birds from './birds';

const app = express();

// 라우팅이란?
// 라우팅은 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말합니다.
// 쉽게 말해서 / <- 이 경로에 대한 클라요청을 어떻게 응답할것인지 결정하는 것.
// 밑에 바로 예시 적어놓음
app.get('/', (req, res, next) => {
  console.log('처음');
  next();
});
// app.get(path(라우트 경로), 함수) <-라우트가 일치하면 함수실행
// /<- 이 경로에 대한 응답은 res를 통해서 한다.
// HTTP method 방법은 2가지이면 get과 post이다.
// HTTP method뿐만 아니라 모든 method를 포함하는것은 app.all() 을 쓰면된다.
//--------------------------------------------------------------------------

app.use('/birds', birds);
app.listen(4000);
// 마지막으로 정리하자
// app.use(함수) <-- 미들웨어
// app.use(path,함수) <-- 모든 HTTP Method 요청에 대해 실행

//--------------------------------------------------------------------------

// next('route')로 미들웨어 다제끼고 다음 라우트로 넘어것을 해보자
app.get(
  '/user/:id',
  function(req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id == 0) next('route');
    // otherwise pass the control to the next middleware function in this stack
    else next(); //
  },
  function(req, res, next) {
    // render a regular page
    console.log('1');
    next();
  },
  function(req, res, next) {
    // render a regular page
    console.log('2');
    next();
  }
);

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function(req, res, next) {
  res.send('special1');
});

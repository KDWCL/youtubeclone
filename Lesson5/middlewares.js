import routes from './routes';

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  }
  next();
};

// https://expressjs.com/ko/4x/api.html#res.locals
// 전역적으로 사용할 수 있는 변수를 추가하는 방법임
// 모든 템플릿에서 사용가능
// 템플릿,뷰,모든곳에서 사용가능
// next();를 써줘야 다음함수로 넘어간다.

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { localMiddleware } from './middlewares';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';
const app = express();
// 애플리케이션 레벨 미들웨어임
app.use(helmet());
app.set('view engine', 'pug');
//app.set("views", "/dist") <- 기본 디렉토리인 views 를 /dist로 변경가능
app.use('/uploads', express.static('uploads'));
/* 주어진 directory에서 file을 전달해주는 새로운 middelware function
   즉, /uploads로 가면 uploads라는 디렉토리로 안에서 정적파일을 가져올수있음
*/
app.use('/static', express.static('static'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(localMiddleware);
// 여기까지 에플리케이션 레벨 미들웨어

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

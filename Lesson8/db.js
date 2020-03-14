import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  //'mongodb://locahost:포트/database이름'
  // dotenv를 설치한 이유는 가끔 내가 어떤 부분을 숨겨놓고 싶을 수 있기 때문이다
  // 즉 , 지금은 localhost에 몽고디비가 있지만 다른 url에 있을 경우 그 url에 유저데이터를 보내는것을 원하지 않을때 사용한다
  // 또한 오픈소스로 내 코드를 올릴때 문제가 된다. 로컬 주소의 데이터베이스면 상관없겟지만 어플리케이션으로 만들어졌을 때를 대비해야한다
  useNewUrlParser: true, useUnifiedTopology: true // <- Lesson 6,7 에서 카피해왔는데 안되서 오류고침
});
// 우리가 요청하는 것은 string으로 된 Database이다. 어디에 database가 저장되어있는지 알려준다
// 새로운 버전의 mongoose는 이런식으로 configuration 을 보낼 수 있다
// 즉 설정을 하는 부분이다

const db = mongoose.connection;

const handleOpen = () => console.log('Connected to DB');
const handleError = error => console.log(`Error on DB Connection:${error}`);

db.once('open', handleOpen); // once라는 것은 한번 실행되는 것
db.on('error', handleError);

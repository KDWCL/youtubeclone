import dotenv from 'dotenv';
dotenv.config();
// 다른걸 import 할수 없기 때문에 주소만 적어준다
import app from './app';
import './db';
import './models/Video';
// 데이터베이스는 models가 만들어진지 모르기때문에 여기에 import해준다
import './models/Comment';
//import './models/User'

const PORT = process.env.PORT || 4000; // .env 파일안에서 PORT를 못찾으면 4000번으로 해라라는 뜻

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

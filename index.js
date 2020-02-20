// const express = require('express'); 
import express from "express";
// require의 역할은 일단 내 폴더에서 express파일을 찾고 없으면 node_modules에서 찾아서 가져온다.
// 이처럼 nodejs는 작은 블록처럼 되어있고 require나 import을 사용하여 쓰게된다.
import morgan from "morgan";
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

const app = express();
// express를 실행해서 담음
const PORT = 4000;


const handleListening = (req,res) => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req,res) => res.send("Hello from home");
const handleProfile = (req, res) => res.send("my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome)
// const handleConnection=(req,res,next)=>{
//     res.send("not happening")
// }
// app.get("/", handleConnection, handleHome)


app.get("/profile", handleProfile)

app.listen(PORT, handleListening);
// 콜백함수로 handleListening을 준다.

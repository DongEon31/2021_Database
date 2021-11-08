// index.js는 필요한 라우터와 서버 실행코드들을 선언
// node_modules에서 express, logger, path 모듈을 불러옴
import express from "express";
import logger from "morgan";
import path from "path";

import loginRouter from "../routes/login"; // 로그인 창을 제어하는 loginRouter
import selectRouter from "../routes/select"; // user 접속시 select 창을 출력
import deleteRouter from "../routes/delete"; // admin 접속시 delete 창을 출력

// port값은 const
const PORT = 3000;
// http를 연결해주는 express 함수
const app = express();

// web에 data를 다루기 쉽게 설정
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// hbs형 file 사용 설정
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs');

// log를 자세히 볼 수 있게 설정 
app.use(logger("dev"));

// Router들의 주소를 설정
app.use('/', loginRouter); // login창 - home
app.use('/select', selectRouter); // user - /select
app.use('/delete', deleteRouter); // admin - /delete

app.listen(PORT,() => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
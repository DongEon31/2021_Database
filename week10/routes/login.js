// DB에 데이터를 삽입하는 것을 구현 
import express from "express";
// sql.js에서 정의한 selectSql을 이용 
import {selectSql} from "../database/sql";

const router = express.Router();

// login.hbs를 web page에 렌더링함
router.get('/', (req,res) => {
    res.render('login');
});

// login.hbs에서 전달받은 값들을 body에 저장한다
router.post('/', async (req,res) => {
    const vars = req.body;
    // admin -> delete page, user -> select page로 이동
    const users = await selectSql.getUsers(); // user 정보 저장
    let whoami = '' // login한 id가 저장되는 whoami
    let checklogin = false; // login 성공 여부
    
    // map : array 맨 앞부터 하나씩 검사
    users.map((user)=> {
        console.log(user.Id);
        if(vars.id===user.Id && vars.password===user.Password){ // id, pw pair가 일치
            console.log('login success!');
            checklogin = true;
            if(vars.id==='admin'){ // admin
                whoami = 'admin';
            }
            else{ // user
                whoami = 'user';
            }
        }
    })
    console.log('whoami:',whoami);

    if(checklogin && whoami === 'admin'){ // login 성공 + admin
        res.redirect('/delete'); // delete page로 이동
    }
    else if(checklogin&& whoami === 'user'){ // login 성공 + user
        res.redirect('/select'); // select page로 이동
    }
    else{ // login 실패 => 실패 팝업창을 전송 
        console.log('login failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})

module.exports = router;
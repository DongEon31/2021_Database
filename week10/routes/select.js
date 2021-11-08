// DB의 데이터 값을 조회하는 select 결과창을 구현 
import express from "express";
// sql.js에서 정의한 selectSql을 이용한다
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req,res){
    // table course, department의 값을 모두 불러옴
    const department = await selectSql.getDepartment();
    const course = await selectSql.getCourse();
    // select.hbs를 불러와 위 값들을 web page에 출력
    res.render('select', {
        title1: 'IT 공대',
        department,
        title2: '과목 리스트',
        course,
    });
});

module.exports = router;
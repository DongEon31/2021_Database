// DB의 데이터 값을 조회하는 select 결과창을 구현 
import express from "express";
// sql.js에서 정의한 selectSql을 이용한다
import {selectSql} from "../database/sql";

const router = express.Router();

// 
router.get('/', async function(req,res){
    // getEmployee, getDepartment 함수의 출력 값을 두 객체에 저장
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();

    // select.hbs를 불러와 위 값들을 web page에 출력
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;
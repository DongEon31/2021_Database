// DB의 필드 데이터 값을 수정하는 update문을 구현
import express from "express";
// sql.js에서 정의한 insertSql, selectSql을 이용 
import {selectSql, updateSql} from "../database/sql";

const router = express.Router();

// Employee의 기존 입력값을 불러옴
router.get('/employee', async (req,res) => {
    // selectSql의 getEmployee 함수의 값을 저장
    const emp_res = await selectSql.getEmployee();
    // page에 렌더링함
    res.render('updateEmployee', {
        title: "직원 테이블 갱신" ,emp_res
    });
});

// Department의 기존 입력값을 불러옴
router.get('/department', async (req,res) => {
    // selectSql의 getDepartment 함수의 값을 저장
    const dept_res = await selectSql.getDepartment();
    // page에 렌더링함
    res.render('updateDepartment', {
        title: "부서 테이블  갱신" ,dept_res
    });
});

// '수정'을 누르면 update query 실행
router.post('/employee', async (req,res) => {
    const vars=req.body;
    const data={
        Salary:vars.salary
    }
    // input이 저장된 data를 updateEmployee로 전달
    await updateSql.updateEmployee(data);
    // select 페이지로 이동함
    res.redirect('/select');
});

// '수정'을 누르면 update query 실행
router.post('/department', async (req,res) => {
    // req.body에는 새로 입력한 Dname이 저장되어 있음
    const vars=req.body;
    console.log(req.query.ssn);
    const data={
        Dname:vars.dname
    }
    // 새로 입력한 input이 저장된 data를 updateDepartment로 전달
    await updateSql.updateDepartment(data);
    // select 페이지로 이동함
    res.redirect('/select');
});
module.exports = router;
// DB에 데이터를 삽입하는 것을 구현 
import express from "express";
// sql.js에서 정의한 insertSql, selectSql을 이용 
import {insertSql, selectSql} from "../database/sql";

const router = express.Router();

// home.hbs를 web page에 렌더링함
router.get('/', (req,res) => {
    res.render('home');
});

// home.hbs에서 전달받은 값들을 body에 저장한다
router.post('/', (req,res) => {
    // req.body에는 '삽입'을 눌렀을 때 입력받은 값들이 저장되어 있음
    const vars = req.body;
    const var_length = Object.keys(req.body).length;
    // body의 data 개수로 employee or department 판단
    if(var_length > 4){
        // 입력한 값들을 객체 data에 저장
        const data={
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Super_ssn: vars.super_ssn,
            Salary: vars.salary,
            Dno: vars.dno
        };
        // data를 insertSql의 setEmployee 함수의 매개변수로 전달
        insertSql.setEmployee(data);
    }
    else{
         // 입력한 값들을 객체 data에 저장
        const data={
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };
        // data를 insertSql의 setDepartment 함수의 매개변수로 전달
        insertSql.setDepartment(data);
    }
    // 삽입이 끝난 뒤 home으로 이동( home은 현재 페이지이므로 새로고침 )
    res.redirect('/');
})

module.exports = router;
// DB의 필드 데이터 값을 수정하는 update문을 구현
import express from "express";
// sql.js에서 정의한 selectSql, deteleSql을 이용 
import {selectSql, deleteSql} from "../database/sql";

const router = express.Router();

// 기존 입력값을 불러온다
router.get('/', async (req,res) => {
    const department = await selectSql.getDepartment();
    const course = await selectSql.getCourse();
    res.render('delete', {
        title1: "Department",
        department,
        title2: "삭제 기능 : Course",
        course,
    })
});

// 삭제 버튼을 누르면 deleteSql 실행
router.post('/', async (req,res) => {
    console.log('delete router:', req.body.delBtn);
    const data = {
        Cnumber: req.body.delBtn, // course_number => data.Cnumber
    };
    await deleteSql.deleteCourse(data); // 삭제 함수의 매개변수 data 전달
    res.redirect('/delete'); // 삭제 후 delete page로 이동
    
});    

module.exports = router;
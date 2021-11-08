// DB 접속, 여러 query 기능을 구현한다
import mysql from "mysql2";

// 접속할 DB와 사용자 정보를 전달한다
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'spark0331!',
        waitForConnections: true,
        connectionLimit:10,
        queueLimit:0 
    }
);

const promisePool = pool.promise();

// Select query 구현
export const selectSql = {
    // getUsers : database week10 - table user의 모든 값을 select
    getUsers : async () => { // query 함수 내부의 코드를 sql에 전달하여 실행
        const [rows] = await promisePool.query(`select * from user`);
        console.log(rows) // console에 query 결과 출력
        return rows // select문 - 출력할 값을 return
    },
     // 함수 getDepartment : table Department의 모든 값을 불러옴
    getDepartment: async () => { // query 함수 내부의 코드를 sql에 전달하여 실행
        const [rows] = await promisePool.query(`select * from department`);
        
        return rows // select문 - 출력할 값 return
    },
    // 함수 getCourse : table Course의 모든 값을 불러옴
    getCourse: async () => { 
        const [rows] = await promisePool.query(`select * from course`);
        
        return rows 
    },
}

// delete문을 수행하는 Delete query 구현
export const deleteSql = {
    deleteDepartment : async (data) => {
        // data의 Dnumber가 어떤 값인지 확인하기 위해 console.log 코드 추가
        console.log('deleteSql.deleteDepartment:',data.Dnumber);
        // '삭제' 버튼을 눌렀을 때의 Dnumber = data.Dnumber
        // 해당 Dnumber와 대응되는 department 튜플을 삭제하는 sql문 실행 
        const sql = `delete from department where Dnumber="${data.Dnumber}"`;
        await promisePool.query(sql);
    },
    deleteCourse : async (data) => {
        // 해당 Cnumber와 대응되는 Course 튜플을 삭제하는 sql문 실행 
        const sql = `delete from course where course_number="${data.Cnumber}"`;
        await promisePool.query(sql);
    },
}

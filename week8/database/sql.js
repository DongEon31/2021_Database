// DB 접속, 여러 query 기능을 구현한다
import mysql from "mysql2";

// 접속할 DB와 사용자 정보를 전달한다
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'spark0331!',
        waitForConnections: true,
        connectionLimit:10,
        queueLimit:0 
    }
);

const promisePool = pool.promise();

// promisePool.query(sql)를 통해 query문이 저장된 sql을 DB에 넘겨 실행.
// Select query 구현
export const selectSql = {
    // 함수 getEmployee : table Employee의 모든 값을 불러옴
    getEmployee : async () => { // query 함수 내부의 코드를 sql에 전달하여 실행
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows) // console에 query 결과 출력
        return rows // select문 - 출력할 값을 return
    },
     // 함수 getDepartment : table Department의 모든 값을 불러옴
    getDepartment: async () => { // query 함수 내부의 코드를 sql에 전달하여 실행
        const [rows] = await promisePool.query(`select * from department`);
        
        return rows // select문 - 출력할 값 return
    },
}

// Insert query 구현
export const insertSql = {
    // 함수 setEmployee : table Employee에 데이터(객체 data)를 삽입
    setEmployee : async (data) => { // 매개변수 data에 유의
            const sql = `insert into employee values (
            "${data.Fname}","${data.Minit}", "${data.Lname}","${data.Ssn}","${data.Bdate}",
            "${data.Address}","${data.Sex}", "${data.Salary}","${data.Super_ssn}","${data.Dno}")`;
            // 위 sql을 query 함수로 전달
            await promisePool.query(sql);
            // data를 insert하기만 하면 되므로 return은 없음 
    },
     // 함수 setDepartment : table Department에 데이터를 삽입
    setDepartment : async (data) => { // 매개변수 data에 유의
        const sql = `insert into department values (
            "${data.Dname}","${data.Dnumber}","${data.Mgr_ssn}","${data.Mgr_start_date}")`;
            // 위 sql을 query 함수로 전달
            await promisePool.query(sql);
            // data를 insert하기만 하면 되므로 return은 없음 
    },
}

// Update query 구현
export const updateSql = {
    // 함수 updateEmployee : 조건에 맞는 employee 튜플에 한해 값 수정
    updateEmployee : async (data) => { // 매개변수 data에 유의
        const sql = `update employee set salary = "${data.Salary}" where Ssn = "12344321"`;
        // 위 sql을 query 함수로 전달
        await promisePool.query(sql);
    },
    // 함수 updateDepartment : 조건에 맞는 Department 튜플에 한해 값 수정
    updateDepartment : async (data) => { // 매개변수 data에 유의
        const sql = `update department set dname = "${data.Dname}" where Dnumber = "3"`;
        // 위 sql을 query 함수로 전달
        await promisePool.query(sql);
    },
}

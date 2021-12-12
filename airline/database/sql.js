// DB 접속, 여러 query 기능을 구현한다
import mysql from "mysql2";

// 접속할 DB와 사용자 정보를 전달한다
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'airline',
        password: 'spark0331!',
        waitForConnections: true,
        connectionLimit:10,
        queueLimit:0 
    }
);

const promisePool = pool.promise();

// Select query 구현
export const selectSql = {
    getAIRPORT : async () => { // query 함수 내부의 코드를 sql에 전달하여 실행
        const [rows] = await promisePool.query(`select * from AIRPORT`);
        return rows // select문 - 출력할 값을 return
    },
    getAIRPLANE: async () => { // query 함수 내부의 코드를 sql에 전달하여 실행
        const [rows] = await promisePool.query(`select * from AIRPLANE`);
        return rows // select문 - 출력할 값 return
    },
    getFLIGHT: async () => { 
        const [rows] = await promisePool.query(`select * from FLIGHT`);
        
        return rows 
    },
    getRESERVATION: async () => { 
        const [rows] = await promisePool.query(`select * from SEAT_RESERVATION`);
        
        return rows 
    },
    getINSTANCE: async () =>{
        const [rows] = await promisePool.query(`select * from LEG_INSTANCE`);
        return rows
    }
}

// Insert query 구현
export const insertSql = {
    setAIRPORT : async (data) => { // 매개변수 data에 유의
            const sql = `insert into AIRPORT values (
            "${data.Airport_code}","${data.Name}", "${data.City}","${data.State}")`;
            await promisePool.query(sql);
    },
    setAIRPLANE : async (data) => { // 매개변수 data에 유의
        console.log(data);
        const sql = `insert into AIRPLANE values (
            "${data.Airplane_id}","${data.Total_number_of_seats}","${data.Airplane_type}",
            "${data.Company}", "${data.Size}")`;
            await promisePool.query(sql);
    },
    setFLIGHT : async (data) => { // 매개변수 data에 유의
        const sql = `insert into FLIGHT values (
            "${data.Flight_number}","${data.Airline}","${data.Weekdays}")`;
            await promisePool.query(sql);
    },
    setRESERVATION : async (data) => { // 매개변수 data에 유의
        const sql = `insert into SEAT_RESERVATION values (
            "${data.Flight_number}",${data.Leg_number},"${data.Date}",${data.Seat_number},"${data.Customer_id}",
            "${data.Customer_name}")`;
            await promisePool.query(sql);
    },
}

// Update query 구현
export const updateSql = {
    updateAIRPORT : async (data) => { // 매개변수 data에 유의
        const sql = `update AIRPORT set airport_code="${data.Airport_code}", name="${data.Name}",
        city="${data.City}",state="${data.State}" where airport_code="${data.Airport_code}"`;
        await promisePool.query(sql);
    },
    updatetAIRPLANE : async (data) => { // 매개변수 data에 유의
        const sql = `update AIRPLANE set Airplane_id="${data.Airplane_id}", Total_number_of_seats=${data.Total_number_of_seats},
        Airplane_type="${data.Airplane_type}", Company="${data.Company}", Size="${data.Size}" where Airplane_id = "${data.Airplane_id}"`;
        await promisePool.query(sql);
    },
    updateFLIGHT : async (data) => { // 매개변수 data에 유의
        const sql = `update FLIGHT set Flight_number= "${data.Flight_number}", Airline="${data.Airline}",
        Weekdays="${data.Weekdays}" where Flight_number= "${data.Flight_number}"`;
        await promisePool.query(sql);
    },
}

// Delete query 구현
export const deleteSql = {
    deleteAIRPORT : async (data) => {
        const sql = `delete from AIRPORT where Airport_code="${data.Airport_code}"`;
        await promisePool.query(sql);
    },
    deleteAIRPLANE : async (data) => {
        const sql = `delete from AIRPLANE where Airplane_id="${data.Airplane_id}"`;
        await promisePool.query(sql);
    },
    deleteFLIGHT : async (data) => {
        const sql = `delete from FLIGHT where Flight_number="${data.Flight_number}"`;
        await promisePool.query(sql);
    },
    deleteRESERVATION : async (data) => {
        const sql = `delete from SEAT_RESERVATION where Flight_number="${data.Flight_number}" and Leg_number=${data.Leg_number}
        and Date="${data.Date}" and Seat_number=${data.Seat_number}`;
        await promisePool.query(sql);
    },
}

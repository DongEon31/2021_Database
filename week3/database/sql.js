import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'ahzmdkd13', // mysql user id
    database: 'myfirstdb', // database
    password: 'spark0331!', // mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

const promisePool = pool.promise();

const sql = {

  getUsers : async () => {
    const [rows] = await promisePool.query(`
      SELECT * FROM student 
    `) // student table에서 모든 데이터를 SELECT
    
    return rows
  },
}

module.exports = sql
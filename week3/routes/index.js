import express from "express";
import sql from "../database/sql";

const router = express.Router();
router.get('/', async function(req, res, next) {
  
  const users = await sql.getUsers()
  console.log(users);
  res.render('users', {  // users.hbs를 출력
    title: '사용자 목록', // 제목
    users
  });
});

module.exports = router;
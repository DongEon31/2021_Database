import express from "express";
import {selectSql, insertSql, deleteSql} from "../database/sql";

const router = express.Router();

// 
router.get('/', async function(req,res){
    // getEmployee, getDepartment 함수의 출력 값을 두 객체에 저장
    const airport = await selectSql.getAIRPORT();
    const airplane = await selectSql.getAIRPLANE();
    const flight = await selectSql.getFLIGHT();
    const seat = await selectSql.getRESERVATION();
    // home.hbs를 불러와 위 값들을 web page에 출력
    res.render('home', {
        title: 'AIRPORTs',
        title2: 'AIRPLANEs',
        title3: 'FLIGHTs',
        title4: 'RESERVATION STATUS',
        airport,
        airplane,
        flight,
        seat
    });
});

router.post('/', async (req,res) => {
    const vars = req.body;
    const var_length = Object.keys(req.body).length;
        if(req.body.admin!=undefined){
              res.redirect('/admin');
        }
        else if(req.body.updateadmin!=undefined){
            res.redirect('/updateadmin');
        }
        else if(req.body.user!=undefined){
            res.redirect('/user');
        }
})

module.exports = router;
import express from "express";
import {deleteSql, insertSql, selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req,res){
    const seat = await selectSql.getRESERVATION();
    const instance = await selectSql.getINSTANCE();
    res.render('user', {
        title: 'RESERVATION STATUS : choose to cancel reservation',
        title2: 'LEG INSTANCEs',
        seat,
        instance
    });
});

router.post('/', async (req,res) => {
    const vars = req.body;
    const var_length = Object.keys(req.body).length;
    if(req.body.home!=undefined){
        res.redirect('/');
    }
    else if(var_length <5){
        const data={
            Flight_number: req.body.delreserve1,
            Leg_number: req.body.delreserve2,
            Date: req.body.delreserve3,
            Seat_number: req.body.delreserve4
        }
        console.log(data);
        deleteSql.deleteRESERVATION(data);
    }
     else
    {
        const data={
            Flight_number: vars.Flight_number,
            Leg_number: vars.Leg_number,
            Date: vars.Date,
            Seat_number: vars.Seat_number,
            Customer_id: vars.Customer_id,
            Customer_name: vars.Customer_name
        };
        console.log(data);
        insertSql.setRESERVATION(data);
    }
    res.redirect('/user');
})

module.exports = router;
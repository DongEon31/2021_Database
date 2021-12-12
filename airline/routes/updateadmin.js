import express from "express";
import {updateSql, selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req,res){
    const airport = await selectSql.getAIRPORT();
    const airplane = await selectSql.getAIRPLANE();
    const flight = await selectSql.getFLIGHT();
    res.render('updateadmin', {
        title: 'AIRPORTs',
        title2: 'AIRPLANEs',
        title3: 'FLIGHTs',
        airport,
        airplane,
        flight,
    });
});

router.post('/', async (req,res) => {
    const vars = req.body;
    const var_length = Object.keys(req.body).length;

    if(req.body.admin!=undefined){
        res.redirect('/admin');
    }
    else if(var_length == 3){ // FLIGHT
        const data= {
            Flight_number: vars.Flight_number,
            Airline: vars.Airline,
            Weekdays: vars.Weekdays
        };
        console.log(data);
        updateSql.updateFLIGHT(data);
        res.redirect('/updateadmin');
    }
     else if(var_length == 4){ // AIRPORT
        const data={
            Airport_code: vars.Airport_code,
            Name: vars.Name,
            City: vars.City,
            State: vars.State
        };
        console.log(data);
        updateSql.updateAIRPORT(data);
        res.redirect('/updateadmin');
     }
        else if(var_length == 5){ // AIRPLANE
        const data={
            Airplane_id: vars.Airplane_id,
            Total_number_of_seats: vars.Total_number_of_seats,
            Airplane_type: vars.Airplane_type,
            Company: vars.Company,
            Size: vars.Size
        };
        console.log(data);
        updateSql.updatetAIRPLANE(data);
        res.redirect('/updateadmin');
     }
})
module.exports = router;
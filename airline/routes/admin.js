import express from "express";
import {insertSql, deleteSql, selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req,res){
    const airport = await selectSql.getAIRPORT();
    const airplane = await selectSql.getAIRPLANE();
    const flight = await selectSql.getFLIGHT();
    // admin.hbs를 불러와 위 값들을 web page에 출력
    res.render('admin', {
        title: 'AIRPORTs : choose to delete',
        title2: 'AIRPLANEs : choose to delete',
        title3: 'FLIGHTs : choose to delete',
        airport,
        airplane,
        flight
    });
});

router.post('/', async (req,res) => {
    const vars = req.body;
    const var_length = Object.keys(req.body).length;
    if(var_length == 1){ // DELETE
        if(req.body.delairport!=undefined){
            const data={Airport_code: req.body.delairport};
            await deleteSql.deleteAIRPORT(data);
            res.redirect('/admin');
        }
        else if(req.body.delairplane!=undefined){
            const data={Airplane_id: req.body.delairplane};
            await deleteSql.deleteAIRPLANE(data);
            res.redirect('/admin');
        }
        else if(req.body.delflight!=undefined){
            const data={Flight_number: req.body.delflight};
            await deleteSql.deleteFLIGHT(data);
            res.redirect('/admin');
        }
        else if(req.body.updateadmin!=undefined){
            res.redirect('/updateadmin');
        }
         else if(req.body.home!=undefined){
            res.redirect('/');
        } 
    }
    else{
        if(var_length == 3){ // FLIGHT
            const data= {
                Flight_number: vars.Flight_number,
                Airline: vars.Airline,
                Weekdays: vars.Weekdays
            };
            console.log(data);
            insertSql.setFLIGHT(data);
        }
         else if(var_length == 4){ // AIRPORT
            const data={
                Airport_code: vars.Airport_code,
                Name: vars.Name,
                City: vars.City,
                State: vars.State
            };
            console.log(data);
            insertSql.setAIRPORT(data);
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
                insertSql.setAIRPLANE(data);
         }
         res.redirect('/admin');
    }
})

module.exports = router;
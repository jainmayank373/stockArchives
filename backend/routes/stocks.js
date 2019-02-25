const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Stocks  = require('../models/stocks');
const stockRouter = express.Router();

function dateAndSkip(req){
let date;
        let skip;
        if(!req.body.skip){
            skip =0;
        }
        else{
            skip = parseInt(req.body.skip);
        }
        if(!req.body.year || !req.body.month || !req.body.day){
                console.log("IF");
                date = new Date(2016,11,30);
        }  
        else{
            let year = parseInt(req.body.year);
            let month = parseInt(req.body.month);
            let day =parseInt(req.body.day);
            date1 = new Date(year,month,day);
            date2 = new Date(year,month,day+1);
           // console.log(year,month,day);
        }
        return {date1,date2,skip};
}

//REST API FOR PATH /stocks

stockRouter.route('/')

    //GET Method Requesting /stocks

    .post((req,res,next)=>{
        let obj;
        obj = dateAndSkip(req);
        
        console.log("DATE DATA",req.body.year,req.body.month,req.body.day,obj.date1,obj.skip);
        Stocks.find({$and:[{date:{$gte:obj.date1}},{date:{$lt:obj.date2}}]}).skip(obj.skip).limit(10)
        .then((data)=>{

        console.log("data",data);
                res.statusCode =200;
                res.json(data);
        })
            .catch((err)=>{
                next(err);
            })
    });


    //Seraching Stock With Name/Ticker

stockRouter.route('/searchticker')
   
    .post((req,res,next)=>{
        let skip;
        if(!req.body.skip){
            skip = 0;
        }
        else{
            skip =parseInt(req.body.skip);
        }
        console.log(req.body.ticker);
        Stocks.find({symbol:req.body.ticker}).skip(skip).limit(10)
        .then((data)=>{
                res.statusCode =200;
                res.json(data);
        })
            .catch((err)=>{
                    next(err);
            })
    });


//Serach Stock With specific Date

stockRouter.route('/searchdate')

    .post((req,res,next)=>{
         let obj;
         obj = dateAndSkip(req);
        
        //console.log(req.body.year,req.body.date,req.body.day,date,skip);
        Stocks.find({$and:[{date:{$gte:obj.date1}},{date:{$lt:obj.date2}}]}).skip(obj.skip).limit(10)
        .then((data)=>{
               console.log(data);
                res.statusCode =200;
                res.json(data);
        })
    });

    //REST API FOR PATH /stocks/id

stockRouter.route('/:stockId')



      //GET Method Requesting Particular ID

     .post((req,res,next)=>{

        Stocks.findById({_id:req.params.stockId})
        .then((data)=>{
                res.statusCode =200;
                res.json(data);
        })
        .catch((err)=>{
                        next(err);
        })
                
                
           
                  
    })


    module.exports =stockRouter;
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const stocksSchema = new Schema({
    date:{
        type:Date
    } ,
    symbol:{
        type:String
    },
    close:{
        type:String
    } ,
    low:{
        type:String
    },
    high:{
        type:String
    } ,
    volumne:{
        type:String
    }}
);

var stocks = mongoose.model('Stock',stocksSchema,'stockdata');
module.exports = stocks;
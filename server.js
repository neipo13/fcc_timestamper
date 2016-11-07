const express = require('express');
const moment = require('moment');
const app = express();

app.get('/:date', function(req, res){
    //console.log('passed in:', req.params.date)
    var fromDate = Number.parseInt(req.params.date[0]);
    var date = moment(req.params.date);
    if(!isNaN(fromDate)){
        //console.log('is unix time');
        date = moment(req.params.date * 1000);
    }
   if(date.isValid()){
       //console.log('valid',date);
       var ret = {
           'unix': date.format('X'),
           'natural': date.format('MMMM D, YYYY')
       }
       res.send(ret);
   }
   else{
       var ret = {
           'unix': null,
           'natural': null
       }
       res.send(ret);
   }
});

app.listen(8080, function(){
    console.log('listening on 8080');
});
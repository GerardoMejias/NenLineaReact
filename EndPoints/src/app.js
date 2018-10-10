const express = require('express');
const app=express();

const morgan=require('morgan');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3001);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.listen(app.get('port'),()=>{
    console.log("runnning on port 3001");
})

require('./rutas')(app);
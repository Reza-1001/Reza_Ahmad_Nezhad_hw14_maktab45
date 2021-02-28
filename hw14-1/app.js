const express=require('express');
const app=express();
const path=require('path');
const router=require('./routes/router');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use( express.static( "public" ) );
app.set('view engine','ejs');
app.use('/',router);
app.listen(5000,()=>{
    console.log("server is running on port 5000 ...")
});

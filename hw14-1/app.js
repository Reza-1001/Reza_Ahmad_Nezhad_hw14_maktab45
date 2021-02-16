const express=require('express');
const app=express();
const path=require('path');
const router=require('./routes/router');
const fs=require('fs');

app.use('/',router);
app.listen(5000,()=>{
    console.log("server is running on port 5000 ...")
});

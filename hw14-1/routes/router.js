const express=require('express');
const router=express.Router();
const fs=require('fs');
const path=require('path');
const data=require('../public/data');

router.get('/home',(req,res)=>{
    res.render('../views/pages/home.ejs',{data:data})
})
router.get('/contact',(req,res)=>{
    res.render('../views/pages/contact.ejs',{data:data})
})
router.get('/about',(req,res)=>{
    res.render('../views/pages/about.ejs',{data:data})
})
module.exports = router;
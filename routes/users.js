const express = require('express')
const adminData = require('./admin')
const router = express.Router();


router.get('/users',(req,res,next)=>{
    res.render('users',{
        usrName: adminData.users
    })
})

exports.routes = router


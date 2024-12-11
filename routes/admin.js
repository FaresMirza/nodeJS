const express = require("express")
const router = express.Router();
const users = []
router.get('/',(req,res,next)=>{
  res.render('index')
  
})

router.post('/',(req,res,next)=>{
    users.push(req.body.title)
    res.redirect('/users')
})


exports.routes = router
exports.users = users

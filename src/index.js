const express=require('express')
const User=require('./api/user/user.router')
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(User)

app.listen(3000,()=>{
    console.log("server is connected")
 })

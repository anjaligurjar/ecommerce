const express=require('express')
const User=require('./src/api/user/user.route')
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))


 
    

 app.listen(3000,()=>{
    console.log("server is connected")
 })

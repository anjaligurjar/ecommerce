const express = require('express')
const bcrypty = require('bcrypt')

const dotnev = require('dotenv').config()

const mongoose = require('./user.db.js')
const User = require('./user.models')
const userAuth = require('./user.auth')
const jsonwebToken = require('jsonwebtoken')
const router = express.Router()
router.post("/register", async (req, res) => {
    const { username, email, isAdmin, password, cpassword } = req.body
    const user = new User({ username, email, isAdmin, password, cpassword })
    await user.save().then((User) => {
        res.status(200).send("register successfully")

    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })

    console.log(user)


})
router.get('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body
        const user = User.findOne({ email: email, password: password })
        console.log(user)
        if (user) {
            const ismatch = await bcrypty.compare(password, user.password)
            // const token= await genrateAuthToken()
            // console.log(token)
            // res.cookie("jsonwebtoken",token,{
            //     expiration:new Date(date.now() + 2345678)

        }
    }


    catch {

    }

})












// router.get('/id',verifytokenauth,(req,res)=>{
//     const user=new User.findByid(req.param.id)
//     user.save().then(user=>{
//         res.send(200).json('user updated successfully')
//     })

// })
// router.put('/delete',(req,res)=>{
//     User.deleteOne({username: req.body.username})
// }).then(user=>{
//     res.json('user deleted successfully')
// })



// router.get('/state', async(req,res)=>{
//     const date= new Date()
//     const lastyear= new Date( date.setFullYear(date.getFullyear)-1)
//     try{
//         const data=await User.aggregate[{
//             $match:{$gt:lastyear}.limit(5),
//             $set:req.body,
// $project:{
//     month:{$month:"$createAt"}


// },
// $group:{
//     id:{$month},
//     total:{$sum:1}

// }
//         }]
//         res.status(200).json(data)
//     }
//     catch(error){
//         res.status(400).json({

//         })
//     }



// })
module.exports = router;
const express = require('express')
const User = require('./user.models')
const userAuth = require('./user.auth')
const router = express.Router()

router.post("./register", async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin

    })

    try {
        const saveduser = await user.save()
        res.send(200).json(saveduser)
    }
    catch (error) {
        console.log('this is  not register', error)
    }


})

router.get('/login', (req, res) => {
    User.find({
        password: req.body.password,
        email: req.body.email
    }
    ).then(user => {
        if (!User) {
            res.send(400).json('user is not found')
        }
        else {
            userAuth.jetToken(user, (error, token) => {
                res.json({
                    user: user,
                    token: token
                })


            })
        }

    }
    )})



router.get('./verification', userAuth.verifyToken, userAuth.extractToken,(req,res,next)=>{
    res.send(req.auth.user)
})




module.exports = router;
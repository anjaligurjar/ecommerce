const express = require('express')
const User = require('./user.models')
const userAuth = require('./user.auth')
const router = express.Router()

router.post("/register", async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
       isAdmin: req.body.isAdmin,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
          ).toString(),

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
                }
                )


            })
        }

    }
    )})



router.get('/verification', userAuth.verifyToken, userAuth.extractToken,(req,res,next)=>{
    res.send(req.auth.user)
})
next();
router.get('/id',verifytokenauth,(req,res)=>{
    const user=new User.findByid(req.param.id)
    user.save().then(user=>{
        res.send(200).json('user updated successfully')
    })

})
router.delete('/delete',(req,res)=>{
    User.deleteOne({username: req.body.username})
}).then(user=>{
    res.json('user deleted successfully')
})



router.get('/state', async(req,res)=>{
    const date= new Date()
    const lastyear= new Date( date.setFullYear(date.getFullyear)-1)
    try{
        const data=await User.aggregate[{
            $match:{$gt:lastyear}.limit(5),
            $set:req.body

        }]
    }
    catch(error){
        res.status(400).json({

        })
    }



})


module.exports = router;
const express=require("express")
const { verifyTokenAndAdmin } = require("../user/user.auth")
const product=require('./product.models')
const router=express.Router()
const app=express()

router.post('/services',async(req,res)=>{
    const prodcut = new product({
        tilte: req.body.title,
        price: req.body.price,
        password: req.body.color,
        categaries: req.body.categaries,
        colors: req.body.price,
        weight: req.body.weight,
        img: req.body.img,

    })
    const details=await product.save()
    res.send(200).json(details)
  
    
})
router.get('/',verifyTokenAndAdmin,async(req,res)=>{
   const user= await product.UpdatedBYid(req.body)
    res.send(200),json({
        user:user
    })
   

})



router.post('/product',()=>{

})

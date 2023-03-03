const express=require("express")
const product=require('./product.models')
const router=express.Router()
const app=express()

router.get('/services',async(req,res)=>{
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



router.post('/product',()=>{

})

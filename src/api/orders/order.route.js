const express=require('express')
const router=express.Router()
const Orders=require("./order.js")
router.post('/order',async(req,res)=>{
    const order=new Orders(req.body)
try
{
const saved=await order.save()
res.send().json("")
}
catch(error){
res.send(error)
}
})

router.get('/:id',verifyTokenAndAdmin,async(req,res)=>{
    Orders.findOne(req.param.id)

})

router.post('/id:',async(req,res)=>{
    try{
    const updated= new Orders.updated(req.param.id
        ,
        {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedOrders);
      } catch (err) {
        res.status(500).json(err);
      }
    })


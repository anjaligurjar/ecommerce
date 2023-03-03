const mongoose =require('mongoose')
const orderSchema=new mongoose.Schema({
    userID:{type:String,},
    products:[{
        productid:{type:String},
        quantity:{
            type:Number,
            default:1
        },
        address:{
            type:Object,
            
        },
        amount:{
            type:Number
        },
        status:{
            type :String,
            default:"pending"

        }
}]
    
    
},{

    timestamp:true

}
)
module.exports=mongoose.model('orders',orderSchema)
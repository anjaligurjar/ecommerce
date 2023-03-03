const mongoose =require('mongoose')
const cartschema=new mongoose.Schema({
    userID:{type:String,},
    products:[{
        productid:{type:String},
        quantity:{
            type:Number
        }
}]
    
    
},{

    timestamp:true

}
)
module.exports=mongoose.model('cart',cartschema)
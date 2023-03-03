const mongoose =require('mongoose')
const productschema=new mongoose.Schema({
    title:{type:String,reuired:true,unique:true},
    size:{type:String, required:true},
    price:{type:Number,reuired:true},
    color:{type:String},
    weight:{type:String,reuired:true},
   deccription :{type:String,reuired:true,unique:true},
   categaries :{type:Array},
   img :{type:String,reuired:true,unique:true},
    
},{

    timestamp:true

}
)
module.exports=mongoose.model('product',productschema)


    

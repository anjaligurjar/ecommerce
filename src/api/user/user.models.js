const mongoose =require('mongoose')
const userschema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    isAdmin:{
        type:Boolean,
        default:false

    },
},{

    timestamp:true

}
)
module.exports=mongoose.model('user',userschema)
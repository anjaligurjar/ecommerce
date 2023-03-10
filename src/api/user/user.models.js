const mongoose =require('mongoose')
const bcrypt= require("bcrypt")

const userschema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    cpassword:{type:String},
    isAdmin:{
        type:Boolean,
        default:false

    },
    tokens:[{
        token:{
            type:Number,
            reuired:true
        }
    }]
},{

    timestamp:true

}
)

userschema.pre('save',async function (next){
    console.log("hi i am  in side")
if(this.isModified('password')){
    this.password=await bcrypt.hash( this.password,12)
    this.cpassword=await bcrypt.hash( this.cpassword,12)
   
    next()
}
})

exports.userschema.methods.genrateAuthToken=async function(){
    try{

        const token=jwt.sign({_id:this.id},process.env.secretekey)
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        return token
    }
    catch(err){

    }
}
 module.exports=mongoose.model('user',userschema)
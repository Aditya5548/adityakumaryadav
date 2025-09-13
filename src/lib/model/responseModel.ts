import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    Username:{type:String,required:true},
    PhoneNo:{type:Number,required:true},
    Email:{type:String,required:true},
    Message:{type:String,required:true},
    Purpose:{type:String,required:true},
    Date:{type:String,required:true},
    Time:{type:String,required:true},
    Status:{type:Boolean,required:true,default:false},
})
const responseModel = mongoose.models.UserResponses || mongoose.model("UserResponses",userSchema)
export default responseModel;
import mongoose from "mongoose";

const OtpSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    otp:{
        type:String,
        required:true,
    },
    expiresAt:{
        type:Date,
        required:true,
        default: ()=> Date.now()+5*60*1000,
    },
},
{
    timeStamps:true,
})
const OTP = mongoose.model("otp",OtpSchema);
export default OTP;
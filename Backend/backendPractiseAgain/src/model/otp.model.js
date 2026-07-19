import mongoose, { Schema } from "mongoose";

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
        default:()=>Date.now() + 1000*60*5,
    }
})

const OTP = mongoose.model("otp", OtpSchema);
export default OTP;
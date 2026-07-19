import { loginUser } from "../controller/auth.controller.js";
import { registerUser } from "../controller/auth.controller.js";
import { sendOTP } from "../controller/auth.controller.js";
import { verifyOTP } from "../controller/auth.controller.js";
import { resetPassword } from "../controller/auth.controller.js";
import { OTPAuthProtect } from "../middleware/auth.middleware.js";
import express from "express";

const route = express.Router();

route.post("/login", loginUser);
route.post("/register", registerUser);
route.post("/send-otp", sendOTP);
route.post("/verify-otp", verifyOTP);
route.post("/reset-Password", OTPAuthProtect, resetPassword)
export default route;

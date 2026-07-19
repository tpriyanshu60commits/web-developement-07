import express from "express";
import { RegisterUser, loginUser } from "../controllers/auth.controller.js";
import { logOutUser } from "../controllers/auth.controller.js";
import { SendOTP } from "../controllers/auth.controller.js";
import { ResetPassword } from "../controllers/auth.controller.js";
import { VerifyOTP } from "../controllers/auth.controller.js";
import { OTPAuthProtect } from "../middleware/auth.middleware.js";
const router = express.Router();

// router.get("/home", (req, res) => {
//     res.send("Hello Waorld from Router");
// });

// router.post("/login", (req, res) => {
//     res.send("Login Route");
// });

router.post("/register", RegisterUser);
router.post("/login", loginUser);
router.post("/logout", logOutUser);
router.post("/send-otp", SendOTP);
router.post("/verify-otp", VerifyOTP);
router.post("/reset-password", OTPAuthProtect, ResetPassword);
export default router;

import express from "express";
import { RegisterUser , loginUser } from "../controllers/auth.controller.js"

const router = express.Router();

// router.get("/home", (req, res) => {
//     res.send("Hello Waorld from Router");
// });

// router.post("/login", (req, res) => {
//     res.send("Login Route");
// });

router.post("/register", RegisterUser);
router.post("/login", loginUser);


export default router;
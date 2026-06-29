import express from "express";
import { login } from "../controllers/auth.controller.js"

const router = express.Router();

// router.get("/home", (req, res) => {
//     res.send("Hello Waorld from Router");
// });

// router.post("/login", (req, res) => {
//     res.send("Login Route");
// });

router.post("/login", login);

export default router;
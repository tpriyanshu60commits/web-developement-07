import { RegisterUser } from "../controller/auth.controller.js";
import express from 'express';
const router = express.Router();
router.post("/register",RegisterUser);
export default router;
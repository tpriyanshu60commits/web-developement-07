import express from "express";
import {
  LoginUser,
  LogoutUser,
  RegisterUser,
} from "../controllers/auth.controller.js";

import { sampleMiddleWare1 ,sampleMiddleWare2 } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", LoginUser);
router.post("/register",sampleMiddleWare1,sampleMiddleWare2, RegisterUser);
router.get("/logout", LogoutUser);

export default router;
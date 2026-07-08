import express from "express";
import multer from "multer";
import { EditUserProfile } from "../controllers/user.controller.js";
const router = express.Router();
const Upload = multer();

router.put("/edit-profile", Upload.single("displayPic"),EditUserProfile);

export default router;
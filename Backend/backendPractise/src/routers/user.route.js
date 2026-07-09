import express from "express";
import multer from "multer";
import { EditUserProfile } from "../controllers/user.controller.js";
import { AuthProtect } from "../middleware/auth.middleware.js";
const router = express.Router();
const Upload = multer();

router.put("/edit-profile", AuthProtect , Upload.single("displayPic"),EditUserProfile);

export default router;
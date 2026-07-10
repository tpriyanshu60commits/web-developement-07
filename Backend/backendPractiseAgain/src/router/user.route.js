import { EditUserProfile } from "../controller/user.controller.js";
import multer from "multer";
import express from 'express';

const route = express.Router();
const Upload = multer();

route.put("/edit-profile" , Upload.single("displayPic"),  EditUserProfile);
export default route;
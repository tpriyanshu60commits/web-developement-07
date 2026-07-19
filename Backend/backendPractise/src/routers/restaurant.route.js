import express from "express";
import multer from "multer";

import { restaurantProfileUpdate } from "../controllers/restaurant.controller.js";

const upload = multer();
const router = express.Router();

router.post(
  "/update-profile",
  (req, res, next) => {
    req.user = {
      _id: "686f0f1234567890abcdef12",
      phone: "9876543210",
    };
    next();
  },
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "restaurantImage", maxCount: 10 },
  ]),
  restaurantProfileUpdate
);
export default router;

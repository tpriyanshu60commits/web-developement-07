import User from "../models/auth.model.js";
import jwt from "jsonwebtoken";

export const AuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.oreo;
    if (!token) {
      const error = new Error("session expired");
      error.statusCode = 401;
      return next(error);
    }
    console.log("token", token);

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }
    console.log("decode :", decode);
    const verifiedUser = await User.findById(decode.id);
    console.log("VerifiedUser:", verifiedUser);
    if (!verifiedUser) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifiedUser;
    next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

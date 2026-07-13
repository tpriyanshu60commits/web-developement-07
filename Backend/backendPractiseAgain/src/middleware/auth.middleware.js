import User from "../model/auth.model.js";
import jwt from "jsonwebtoken";

export const AuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.Oreos;
    if (!token) {
      const error = new Error("cookie Expired");
      error.statusCode = 401;
      return next(error);
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      const error = new Error("cookie Expired");
      error.statusCode = 401;
      return next(error);
    }
    console.log(decode);
    const verifiedUser = await User.findById(decode.id);
    if (!verifiedUser) {
      const error = new Error("cookie Expired");
      error.statusCode = 401;
      return next(error);
    }
    req.user = verifiedUser;
    next();
  } catch (error) {
    throw error;
  }
};

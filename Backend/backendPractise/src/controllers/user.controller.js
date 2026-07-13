import User from "../models/auth.model.js";
import cloudinary from "../config/cloudinary.config.js";
import bcrypt from 'bcrypt';

export const EditUserProfile = async (req, res, next) => {
  try {
    const { email, fullName, phone } = req.body;
    const newPhoto = req.file;
    console.log("BODY:", req.body);

    console.log("FILE:", req.file);

    if (!fullName || !email || !phone) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 404;
      return next(error);
    }
    if (newPhoto) {
      const b64 = Buffer.from(newPhoto.buffer).toString("base64");
      const dataURI = `data:${newPhoto.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "",
        width: 500,
        height: 500,
        crop: "fill",
      });

      console.log(result);
      existingUser.photo.url = result.secure_url;
      existingUser.photo.publicId = result.public_id;
    }
    existingUser.fullName = fullName;
    existingUser.phone = phone;
    await existingUser.save();

    res.status(200).json({
      message: "User updated successfully ",
      data: existingUser,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const UpdateUserPassword = async(req,res,next)=>
{
  try{
    
  const{email , oldPassword,newPassword}=req.body;
  if(!oldPassword || !newPassword || !email)
  {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    return next(error);
  }
  const existingUser = await User.findOne({email});
  if(!existingUser)
  {
    const error = new Error("Email not registered");
    error.statusCode = 401;
    return next(error);
  }
  const isPasswordMatch = await bcrypt.compare(oldPassword , existingUser.password);
  if(!isPasswordMatch)
  {
    const error = new Error("oldpassword is not correct");
    error.statusCode = 400;
    return next(error);
  }

  const hashedPassword = await bcrypt.hash(newPassword,10);
  existingUser.password = hashedPassword;
  await existingUser.save();

  res.status(200).json({
    message:"password updated successfully",
  })
  }
  catch(error)
  {
    console.log(error.message);
    next(error);
  }
}
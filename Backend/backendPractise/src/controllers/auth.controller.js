// export const login = (req,res)=>
// {
//     res.send("this is controller function")
// }
import User from "../models/auth.model.js";

export default login =(req,res,next)=>
{
  const{fullName , email, phone , gender , photo , password, dob} = req.body;
  if(!fullName || !email || !phone || !gender || !photo || !password || !dob)
  {
    const error = new Error("All fields required");
    error.statusCode = 400;
    return next(error);
  }
  const existingUser = await User.findOne({email});
  if(existingUser)
  {
    const error = new Error("Email already registered");
    error.statusCode = 409;
    return next(error);
  }

}

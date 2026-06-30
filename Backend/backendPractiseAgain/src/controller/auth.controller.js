export const login = (req,res,next)=>
{
    const {email,password}= req.body;
    if(email!=="abc@gmail.com")
    {
        const error = new Error("email is not registered");
        error.statuscode = 400;
       return next(error);
    }
    if(password!=="12345")
    {
        const error = new Error("password is not correct");
        error.statusCode = 401;
       return next(error);
    }
    
    res.json({
        message: "Login Success",
    });
};

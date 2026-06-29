// export const login = (req,res)=>
// {
//     res.send("this is controller function")
// }

export const login = (req, res, next) => {

    const { email, password } = req.body;

    // Email Check
    if (email !== "abc@gmail.com") {

        const error = new Error("Email Not Registered");

        error.statusCode = 404;

        return next(error);

    }

    // Password Check
    if (password !== "123456") {

        const error = new Error("Password Incorrect");

        error.statusCode = 401;

        return next(error);

    }

    // Success Response
    res.json({
        message: "Login Success"
    });

};
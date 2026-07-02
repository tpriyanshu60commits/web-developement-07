import dotenv from "dotenv";
dotenv.config();
console.log(process.env.port);
console.log(process.pid);

import express from "express";
import authrouter from "./src/routers/auth.route.js";
import testrouter from "./src/routers/test.route.js";
import connectDB from "./src/config/dbConnection.config.js"
const app = express();
app.use(express.json());

app.use("/auth", authrouter);
app.use("/test", testrouter);

app.post("/",(req,res)=>
{
  console.log("this is start of code");
  res.json({
    message:"Welcome to my first backend Project"
  })
})

// Error Handling Middleware
app.use((err, req, res, next) => {

    const ErrMessage = err.message || "Internal Server Error";
    const ErrStatusCode = err.statusCode || 500;

    res.status(ErrStatusCode).json({
        message: ErrMessage
    });

});
const PORT = process.env.port ||3000;



app.listen(PORT, () => {
  console.log("server started");
  connectDB();
});


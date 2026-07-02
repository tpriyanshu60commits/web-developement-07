import dotenv from "dotenv";
dotenv.config();
console.log(process.env.PORT);

import express from "express";
import connectDB from "./src/config/dbConnection.config.js";
import authrouter from "./src/router/auth.route.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/auth", authrouter);
app.post("/", (req, res) => {
  console.log("this is start of code");
  res.json({
    message: "Welcome to my first backend Project",
  });
});

// error handling middleware
app.use((err, req, res, next) => {
  const errMessage = err.message || "internal server issue";
  const errStatusCode = err.statusCode || 500;

  res.status(errStatusCode).json({
    message: errMessage,
  });
});

app.listen(PORT, () => {
  console.log("server started");
  connectDB();
});

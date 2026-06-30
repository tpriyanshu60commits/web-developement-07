import dotenv from "dotenv";
dotenv.config();

import authrouter from "./src/router/auth.route.js";

import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/auth", authrouter);
app.listen(PORT, () => {
  console.log("server started");
});
app.post("/", (req, res) => {
  res.json({
    message: "hello the code now can start",
  });
});

// error handling middleware
app.use((err, req, res, next) => {
  const errmessage = err.message || "internal server crashed";
  const errstatusCode = err.statusCode || 500;

  res.status(errstatusCode).json({
    message:errmessage
  });
});

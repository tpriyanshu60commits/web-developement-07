import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.port);
console.log(process.pid); 

import express from "express";
import authrouter from "./src/routers/auth.route.js";
import testrouter from "./src/routers/test.route.js"
const app = express();

app.use("/auth", authrouter);
app.use("/test" , testrouter)

app.listen(3000, () => {
  console.log("server started");
});

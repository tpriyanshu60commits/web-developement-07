import dotnev from "dotenv";
dotnev.config();
import express, { response } from "express";
const app = express();
app.get("/", (req, res) => {
  console.log("Default get API hit");
  res.json({ message: "Welcome to my first backend Project" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started on port :", port);
});

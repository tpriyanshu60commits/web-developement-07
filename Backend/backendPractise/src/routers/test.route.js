import express from 'express';
import sendEmail from '../config/email.config.js';

const test = express.Router();

test.get("/home" , (req , res)=>
{
    res.send("this is test off method");
})
test.get("/test", (req, res) => {
    res.send("Welcome to test route");
});

// test.get("/send-email")
export default test;

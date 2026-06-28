import express from 'express';

const test = express.Router();

test.get("/home" , (req , res)=>
{
    res.send("this is test off method");
})
test.get("/test", (req, res) => {
    res.send("Welcome to test route");
});
export default test;

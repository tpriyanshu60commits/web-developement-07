import express from "express";
const data = express();
data.listen(3000 , ()=>
{
    console.log("server created and started properly");
    
})
data.get("/home", (req, res) => {
    res.send("Hello World");
});

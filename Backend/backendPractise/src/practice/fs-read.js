import fsd from "fs";

const data1 = fsd.readFileSync("hello.txt", "utf-8");

console.log(data1);


import http from "http";
const data = http.createServer((req, res)=>
{
    res.end("data coming from the backend");
})
data.listen(3000);
console.log("code completed");

import os from "os";
console.log(os.platform());

import path from "path";
const paths = path.join("src" , "practice" , "hello5.txt");
console.log(paths);


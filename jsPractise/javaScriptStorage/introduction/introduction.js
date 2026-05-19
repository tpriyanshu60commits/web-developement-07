let student ={
    name:"priyanshu",
    age:21
}
localStorage.setItem("student",JSON.stringify(student));

let dataRead = localStorage.getItem("student");
console.log(dataRead);

let parsedData = JSON.parse(dataRead);
console.log(parsedData);
console.log(parsedData.name);

sessionStorage.setItem("city", "bhopal");
sessionStorage.setItem("name", "priyanshu");

let city = sessionStorage.getItem("name");
console.log(city);

document.cookie=("username = priyanshu");
console.log(document.cookie);


// Practice Questions — JavaScript CRUD Operations

// 1.Create an empty array and add two user
// objects using push(). 
let users =[];
users.push({id:1 , name:"satakshi"})
users.push({id:2 , name:"soumya"})
// 2.Create an array of users and print all users
// using console.log(). 
console.log(users);
// 3.Access and print the first user from an array
// using indexing. 
console.log(users[0]);
// 4.Use find() to get a user with a specific id from
// an array. 
let user4 = users.find((el)=>el.id===1);
console.log(user4);
// 5.Create an array of users and update the name
// of a user using find(). 
let user5 = users.find((el)=>el.id===1);
if(user5)
{
    user5.name = "rahul"
}console.log(user5);
// 6.Write a program to change a user’s name from
// "Amit" to "Rahul". 
let user6 = [{id:1 , name:"amit"},
    {id:2 , name:"ankit"}
]
let user6Change = user6.find((el)=>el.name=="amit");
if(user6Change)
{
    user6Change.name = "rahuliya"
}
console.log(user6);
// 7.Create an array of users and remove one user
// using filter().
let users7 = users.filter((el)=>el.id==1);
console.log(users7);
//     9.Create a program that:
// • adds two users
// • prints all users

console.log("same as question 1");
// 10. Create a program that:
// • adds users
// • updates one user
// • prints updated list

let user10 = [];
user10 = [{id:1 , name:"priyanshu"}];
user10 = user10.find((el)=>el.name=="priyanshu");
if(user10)
{
    user10.name = "priyanshi";
}
console.log(user10);




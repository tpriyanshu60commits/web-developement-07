// creation
let users = [];
console.log(users);
users.push({ id: 1, name: "priyanshu", gender: "male" });
users.push({ id: 2, name: "sakshi" });
console.log(users);

// read
console.log(users[0]);
console.log(users.name);
console.log(users[0].id);
// update
let user = users.find((u) => u.id === 2);
if (user) {
  user.name = "rahul";
}
console.log(users);

// delete
users = users.filter((val)=>val.id!==1)
console.log(users);






let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr = arr.filter((num) =>
{
    console.log(num);
   return num % 2 == 0;

});
console.log(newarr);


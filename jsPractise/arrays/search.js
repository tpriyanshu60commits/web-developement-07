let arr = [10,20,30,40,50];
console.log(arr.indexOf(30));
console.log(arr.includes(30));
let user = [
    {id:1 , name:"priyanshu"},
    {id:2 , name:"riz"},
]
let users = user.find((f)=>f.id==1);
console.log(users);
let numbers = [10, 20, 30, 40];
let newnumbers = numbers.filter((el)=>el>=20);
console.log(newnumbers);
// sort
let arrSort = [30,8, 10, 20 , 4, 5555, 77, 4 , 1 , 2 , 4444];
arrSort.sort();
console.log(arrSort);

// sort with comparison
let arrSort1 = arrSort.sort((a,b)=> a-b);
console.log(arrSort1);

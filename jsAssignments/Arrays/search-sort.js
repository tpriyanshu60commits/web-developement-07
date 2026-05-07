// Practice Questions — Search & Sort Methods
// 1.Create an array and find the index of an
// element using indexOf().
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(2));
// 2.Check whether a value exists in an array using
// includes().
console.log(arr.includes(6));
// 5.Create an array of objects and find an item
// using find().
let arrObject = [
  { id: 1, name: "Raj" },
  { id: 2, name: "Amit" },
];
let arr5 = arrObject.find((el) => el.id == 1);
console.log(arr5);
// 8.Use filter() to return multiple matching
// elements from an array.
let arr8 = [1, 2, 3, 4, 5, 2, 3, 5, 6, 7, 8];
let result = arr8.filter((el, index, arr) => {
  return arr.indexOf(el) !== index;
});
console.log(result);

// 9.Create an array of numbers and sort it using
// default sort().

let arr9 = [1, 2, 3, 4, 5, 2, 3, 5, 6, 7, 8,1111];
arr9.sort();
console.log(arr9);
// 10. Sort an array in ascending order using sort((a,
// b) => a - b). 
let arr10 = arr9.sort((a,b)=>a-b);
console.log(arr10);
// 11. Sort an array in descending order using
// sort((a, b) => b - a)
let arr11 = arr9.sort((a,b)=>b-a);
console.log(arr11);

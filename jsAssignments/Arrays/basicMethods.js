// Practice Questions- Add/Remove
// 1.Create an array [1, 2], use push() to add 3,
// and print the updated array.
let arr = [1,2];
arr.push(3);
console.log(arr);

// 2.Create an array [10, 20, 30], use pop() to
// remove the last element, and print both the
// updated array and removed value. 
let arr2 = [10,20,30];
arr2.pop();
console.log(arr2);
// 3.Create an array [2, 3], use unshift() to add 1
// at the beginning, and print the result. 

let arr3 = [2,3];
arr3.unshift(1);
console.log(arr3);
// 4.Create an array [1, 2, 3], use shift() to
// remove the first element, and print both the
// updated array and removed value.
let arr4 = [1,2,3];
console.log(arr4.shift());
console.log(arr4);

// 5.Add multiple elements (4, 5) at the end of
// an array using push().
let arr5 = [1,2,3];
arr5.push(4,5);
console.log(arr5);
// 6.Add multiple elements (1, 2) at the
// beginning of an array using unshift()
let arr6 = [3,4,5];
arr6.unshift(1,2);
console.log(arr6);
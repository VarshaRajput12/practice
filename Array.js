// sorting of an array :------

// let arr = [30, 20, 50, 1, 7, 2, 10];

// let temp;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1]) {
//     temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//     i = 0;
//   }
// }

// console.log(arr);
// ========================================================

// ways to remove duplicates from an array

// let arr = [2, 5, 5, 10, 10, 2, 5, 2, 5, 10];
// ===========================================================
//1 :-> let newArr = [...new Set(arr)]; // new Set() method remove all the duplicate values in an array
// ============================================================

//2 :-> using filter() function

// console.log(arr.filter((ele, i)=>{
//   return arr.indexOf(ele) === i
// }));

let arr2 = [1, 4, 5, 5, 5, 5, 8, 8, 8, 10];
let array = [];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] !== arr2[i + 1]) {
    array.push(arr2[i]);
  }
}
console.log(array);

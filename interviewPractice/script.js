//map , filter, reduce

// const arr = [1,2,3,4,5,6];

// //double the vlue
// const newarr = arr.map((ele)=>{
//     return(ele+ele)
// })

// //converting the binary
// const newarr2 = arr.map((ele)=>{
//     return(ele.toString(2))
// })

// console.log(newarr2);

// filter
// const arr = [1,2,3,4,5,6];

// const filteredArr = arr.filter((ele)=>{
//     if(ele%2==0){
//         return ele
//     }
// })
// console.log(filteredArr)

// reduce

// const arr = [1, 2, 3, 4, 5];

// const reduceArr = arr.reduce((previousValue, currentValue) => {
//   return (previousValue += currentValue);
// }, 0); // 0 initial value for previous value (like if we calculate sum we have to initalize it with 0 or somthing)
// console.log(reduceArr);


//=====================================================


// slice and splice

// let arr = [1,2,3,4,5,6]

// // console.log(arr.slice(1,4))
// arr.splice(1,0,10)
// console.log(arr)

// ====================================================

//  keys of object without using :- Object.keys() function

// let obj = {
//     Name: "varsha",
//     age : 21,
//     City: "delhi"
// }

// for (let keys in obj){
//     console.log(keys)
// }

// =================================================================

// call, apply and bind

// let obj = {
//     firstName: "varsha",
//     lastName: "Rajput"
    
// }
// let obj2 = {
//     firstName: "Kajal",
//     lastName: "Rajput"
    
// }

// function add(age, city){
//     console.log(`${this.firstName} ${this.lastName} ${age} from ${city}`)
// }

// // add.call(obj, 21, "delhi")
// // add.call(obj2, 15, "delhi")
// // add.apply(obj2, [15, "delhi"])

// let bindFun = add.bind(obj, 15, "delhi")

// // console.log(bindFun)

// bindFun()

// =============================================

// hoisting

// abc()
// console.log(a)
// var a = 100;

// function abc(){
//     console.log("hello")
// }


//=========================================================

// this keword 

// let obj = {
//     Name : "varsha",
//     surName : "rajput",
   
// }

// function fun(age){
//     return `${this.Name} ${this.surName}  my age is ${age}`;
// }
// let obj2 = {
//     Name : "kajal",
//     surName : "rajput",
  
// }

// console.log(fun.call(obj, 21))
// console.log(fun.call(obj2))

// let bindFun = fun.bind(obj, 21) 
// console.log(bindFun())

//===============================================================
// promise
// function promise(arr){
//     return new Promise((resolve,reject)=>{
//         if(arr.length > 5){
//             reject("rejected")
//         }else{
//             resolve("resolved")
//         }
//     })
// }
// promise([1,2,3,4,5,6,7]).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

//=======================================================================


// local storage

// let arr = [1,2,3,4,5,6,7,8];

// let store = localStorage.setItem("key", JSON.stringify(arr));

// let get = JSON.parse(localStorage.getItem("key"))

// console.log(get)

//==================================================================

//closure

// function abc(){
//     const a = 100;
//     function xyz(){
//         const b = 2
//         function inner(){
//             console.log(a *b)
//         }
//         inner()
//     }
//     xyz()
// }
// abc()

// ==================================================================

// currying

// function a(x){
//     return function(y){
//         return function(z){
//             return(x*y*z);
//         }
//     }
// }
// console.log(a(2)(3)(4))

// event bubbling and capturing

const maincontainer = document.querySelector(".maincontainer");
const container = document.querySelector(".container");
const innercontainer = document.querySelector(".innercontainer");

function outerMost(){
  alert("grandparent")
}
function outer(){
  alert("parent");
}
function inner(e){
    alert("child")
    e.stopPropagation()
}

maincontainer.addEventListener("click", outerMost);
container.addEventListener("click", outer)
innercontainer.addEventListener("click", inner)
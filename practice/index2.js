// let a;

// console.log(a);
//  var a = 1;

// ((a,b)=>{
//   console.log(a*b);
// })(5,5);

// arr.ঠেলা("Push = ঠেলা");
// arr.বিপরীত();
// console.log("arr:", arr);
// console.log(arr.পরিবর্তন());
// console.log(arr.প্রথমউপাদান());

// MyArray.prototype.বাতিল = function (n) {
//   delete this[n];
//   this.length--;
// };

// we should use .prototype

// function a(){
//   for(var i = 1; i <=5; i++){
//     setTimeout(function(){
//       console.log(i)
//     }, i*1000);
//   }

// }
// a()

// let obj1 = {
//   firstName: 'varsha',
//   LastName: 'Rajput'
// }

let obj2 = {
  firstName: 'Kajal',
  LastName: 'Rajput'
}

function Concat(city){
  console.log(`${this.firstName} ${this.LastName} from ${city}`)
}

// Concat.call(obj1, "Delhi")  // it helps us to change the context of this keyword invoking function
// Concat.apply(obj1, ['Delhi', ''])

let a = Concat.bind(obj1, 'Delhi');
a()

// function a(x){
//    function b(y){
//     console.log(x*y)
//   }
//   b()
// }
// a(3)(5)

// function a(){
//   let x  = 100;
//    function b(y){
//     console.log(x*y)
//   }
//   b(5)
// }
// a();

// var a  = 2;
// // console.log( "80",a);
// // function foo(){
// //   console.log(a);
// // }

// var a = 5;
// // foo()
// console.log(a)

// function a(){
//   var x = 5;
//   function b(){
//     console.log(x)
//   }
//   b()
//   x = 10;
// }
// a();

//first class functions :- the ability to use function as values and can be returned from another function is known as first class function 

// var a = function (param) {
//   console.log(param)
// };

// a(function abc(){
//     console.log("hello")
//   })
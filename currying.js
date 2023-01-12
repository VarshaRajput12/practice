// by bind method

// let multiply = (a, b) => {
//   console.log(a * b);
// };

// let multiplyby = multiply.bind(this, 4, 2);

// multiplyby()

// by using closure

let multiply = function (a) {
  return function (b) {
    console.log(a * b);
  };
};

// let multiplyby = multiply(2);
console.log(multiply(2)(4));
// multiplyby(4)
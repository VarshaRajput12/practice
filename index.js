// console.log("hello")

// var object = Object.create(null);
// // console.log(object);



// let obj = new Object();

// console.log(obj);

// obj.a = 1;
// console.log(obj);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.classs = classs;
// }
// var object = new Person("Sudheer", 25);

// console.log(object);

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// invite.apply(employee1, ["Hello", "How are you?"]);

// var inviteEmployee1 = invite.bind(employee1);
// console.log(inviteEmployee1);
// inviteEmployee1()



// memoization

function outer() {
  let a = {};
  // console.log(a);
  function inner(value) {
    if (a[`${value}`]) {
      console.log("from catch");
      return a[`${value}`];
    }

    let b = 2;
    for (let i = 0; i < value; i++) {
      for (let j = i + 1; j < value; j++) {
        for (let k = j + 1; k < value; k++) {
          b++;
        }
      }
    }
    a[`${value}`] = b;

    return b;
  }

  // return inner();

  console.log(inner(999));
  // console.log(a);
  console.log(inner(5));
  // console.log(a);
  console.log(inner(999));
  // console.log(a);
}

outer();
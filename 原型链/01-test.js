// "use strict";
// {
//   var foo = "foo-----";
// }
// console.log(foo);
// var b = "123";
// myName = "姐姐节";
// console.log(globalThis);

// 原型链
const obj = {
  name: "节节",
  age: 24,
};
obj.__proto__ = {};
obj.__proto__.__proto__ = {};
obj.__proto__.__proto__.__proto__ = {
  address: "重庆",
};
console.log(obj.__proto__.__proto__.__proto__.__proto__);
// [Object: null prototype] {}

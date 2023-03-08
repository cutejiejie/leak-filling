// "use strict";
// {
//   var foo = "foo-----";
// }
// console.log(foo);
// var b = "123";
// myName = "姐姐节";
// console.log(globalThis);

// 原型链
// const obj = {
//   name: "节节",
//   age: 24,
// };
// obj.__proto__ = {};
// obj.__proto__.__proto__ = {};
// obj.__proto__.__proto__.__proto__ = {
//   address: "重庆",
// };
// console.log(obj.__proto__.__proto__.__proto__.__proto__);

// let a = { n: 1 };
// let b = a;
// a.x = a = { n: 2 };
// console.log(a.x);
// console.log(b.x);

// let a = 100;
// let b = a;

// let a = { n: 1 };
// let b = a;

// let n1, n2;
// n1 = n2 = 100;
// // 相当于
// // n2 = 100
// // n1 = n2

// let a = {};
// a.x = 100;

// 可拆解为：
// 1. a.x = undefined // 初始化 a.x 属性
// 2. a.x = 100 // 为 x 属性赋值

// let a = { n: 1 };
// a.x = a = { n: 2 };

// 可拆解为
// a.x = undefined
// let x = a.x // x变量是假想的，实际执行时不会有
// x = a = {n:2}

// // 【1】
// let a = {}, b = "123", c = 123;
// a[b] = "b";
// a[c] = "c"; // a['123] = 'c
// console.log(a[b]); // c

// // 【2】
// let a = {}, b = Symbol("123"), c = Symbol("123");
// a[b] = "b";
// a[c] = "c"; //
// console.log(a[b]); // b

// 【3】
let a = {},
  b = { key: "123" },
  c = { key: "456" };
a[b] = "b";
a[c] = "c"; //
console.log(a[b]); // c
console.log(Object.keys(a)); // [ '[object Object]' ]

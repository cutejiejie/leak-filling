let { count, add } = require("./a.js");
//在支持es6模块的环境下等同于
// import { count, add } from "./a.js";

console.log(count); //0
// console.log(add);
add();
count += "abc";
console.log(count); //0

// main.js
// import { counter, incCounter } from "./a.js";

// console.log(counter); //3
// incCounter();
// console.log(counter); //4

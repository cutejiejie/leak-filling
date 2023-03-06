// // new Function()
// // foo.__proto__ === Function.prototype
// function foo(name, age) {
//   console.log(this, name, age);
// }

// // foo函数可以通过apply/call调用
// // foo.apply("aaa", ["why", 18])
// // foo.call("bbb", "kobe", 30)

// // 1.给函数对象添加方法: hyapply
// Function.prototype.hyapply = function (thisArg, otherArgs) {
//   // this -> 调用的函数对象
//   // thisArg -> 传入的第一个参数, 要绑定的this
//   // console.log(this) // -> 当前调用的函数对象
//   // this.apply(thisArg)

//   // thisArg.fn = this
//   // thisArg.fn()
//   // delete thisArg.fn

//   // 1.获取thisArg, 并且确保是一个对象类型
//   // 在非严格模式下，null、undefined会绑定到window身上
//   thisArg =
//     thisArg === null || thisArg === undefined ? window : Object(thisArg);

//   // thisArg.fn = this
//   Object.defineProperty(thisArg, "fn", {
//     enumerable: false,
//     configurable: true,
//     value: this,
//   });
//   // 展开运算符
//   thisArg.fn(...otherArgs);

//   delete thisArg.fn;
// };

// // foo.hyapply({ name: "why" }, ["james", 25])
// // foo.hyapply(123, ["why", 18])
// // foo.hyapply(null, ["kobe", 30])

// // 2.给函数对象添加方法: hycall
// Function.prototype.hycall = function (thisArg, ...otherArgs) {
//   // 1.获取thisArg, 并且确保是一个对象类型
//   thisArg =
//     thisArg === null || thisArg === undefined ? window : Object(thisArg);

//   // thisArg.fn = this
//   Object.defineProperty(thisArg, "fn", {
//     enumerable: false,
//     configurable: true,
//     value: this,
//   });
//   thisArg.fn(...otherArgs);

//   delete thisArg.fn;
// };

// foo.hycall({ name: "why" }, "james", 25);
// foo.hycall(123, "why", 18);
// foo.hycall(null, "kobe", 30);

// const a = 1234;
// console.log(Object(a));
// console.log(Object.prototype.toString.call(Object(a)));
// console.log(typeof Object(a));
// [Number: 1234]
// [object Number]
// object

// context 是 bind 传入的this
// bindArgs 是bind 传入的各个参数
// Function.prototype.customBind = function (context, ...bindArgs) {
//   const self = this; // 当前的函数本身
//   return function (...args) {
//     const newArgs = bindArgs.concat(args); // 拼接参数
//     return self.apply(context, newArgs);
//   };
// };
// function foo(name, age) {
//   console.log(this, name, age);
// }
// const fnBind = foo.customBind({ x: 100 }, "节jie");
// fnBind(24);

// new Function()
// foo.__proto__ === Function.prototype
function foo(name, age) {
  console.log(this, name, age);
}

// foo函数可以通过apply/call调用
// foo.apply("aaa", ["why", 18])
// foo.call("bbb", "kobe", 30)

// 1.给函数对象添加方法: hyapply
Function.prototype.hyapply = function (thisArg, otherArgs) {
  thisArg =
    thisArg === null || thisArg === undefined ? globalThis : Object(thisArg);
  Object.defineProperty(thisArg, "fn", {
    enumerable: false,
    configurable: true,
    value: this, // thisArg.fn = this 【 console.log(this); // [Function: foo]】
  });
  // 展开运算符
  thisArg.fn(...otherArgs);
  delete thisArg.fn;
};
// foo.hyapply({ name: "why" }, ["james", 25]);
// foo.hyapply(123, ["why", 18]);
// foo.hyapply(null, ["kobe", 30]);
// { name: 'why' } james 25
// [Number: 123] why 18

// 2.给函数对象添加方法: hycall
Function.prototype.hycall = function (thisArg, ...args) {
  // 1.获取thisArg, 并且确保是一个对象类型
  thisArg =
    thisArg === null || thisArg === undefined ? globalThis : Object(thisArg);
  Object.defineProperty(thisArg, "fn", {
    enumerable: false,
    configurable: true,
    value: this, // thisArg.fn = this 【 console.log(this); // [Function: foo]】
  });
  // 展开运算符
  thisArg.fn(...args);
  delete thisArg.fn;
};
// foo.hycall({ name: "why" }, "callNames", 25);
// foo.hycall(123, "calJieJie", 18);
// foo.hycall(null, ["kobe", 30]);
// { name: 'why' } callNames 25
// [Number: 123] calJieJie 18

// 实现hybind函数
Function.prototype.hybind = function (thisArg, ...otherArgs) {
  // console.log(this) // -> foo函数对象
  // 准备把foo函数绑定到thisArg上
  thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);
  Object.defineProperty(thisArg, "fn", {
    enumerable: false,
    configurable: true,
    writable: false,
    value: this,
  });

  return (...newArgs) => {
    // var allArgs = otherArgs.concat(newArgs)
    var allArgs = [...otherArgs, ...newArgs];
    thisArg.fn(...allArgs);
    // delete thisArg.fn
  };
};

function foo1(name, age, height, address) {
  console.log(this, name, age, height, address);
}
var newFoo = foo1.hybind("abc", "kobe", 30);
newFoo(1.88, "广州市0");
newFoo(1.88, "广州市1");
newFoo(1.88, "广州市2");
newFoo(1.88, "广州市3");

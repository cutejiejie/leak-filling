/* let max = Number.MAX_SAFE_INTEGER; //最大安全整数
console.log(max); // 9007199254740991
let max0 = max + 1; // 9007199254740992
let max1 = max + 2; // 9007199254740993
console.log(max0);
console.log(max0 === max1); // true
let maxs = BigInt(Number.MAX_SAFE_INTEGER);
//    let maxs0 = maxx + 1;  // 会报错
// let maxs0 = maxs + 1n;  // 会报错
let maxs0 = maxs + BigInt(1);
let maxs1 = maxs + BigInt(2);
console.log(maxs0);
console.log(maxs0 === maxs1); // false

console.log(parseFloat((0.1 + 0.2).toFixed(10))); */

/* function create() {
  // const a = 100;

  return function () {
    console.log(a);
  };
}

const fn = create();
const a = 200;
let b = 999;
fn(); // 100
 */

/* new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(
      new Promise((resolve, reject) => {
        resolve("我是resolve里的Promise的结果");
        // reject("我是resolve里的Promise的结果");
      })
    );
  }, 2000);
})
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log("err1", err);
  //   throw new Error("catch出错啦");
  // })
  // .catch((err) => {
  //   console.log("err2", err);
  // })
  .then((res) => {
    console.log("res", res);
    return "aaaa";
  })
  .then((res) => {
    console.log("res1是什么", res);
  }); */

// const p1 = new Promise((resolve, reject) => {
//   resolve("我是p1的结果");
// });
// const p2 = new Promise((resolve, reject) => {
//   resolve("我是p2的结果");
// });
// const p3 = new Promise((resolve, reject) => {
//   reject("我是p3不成功的结果");
// });

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function* foo(initial) {
//   console.log("函数开始执行");
//   const value1 = yield initial + "aaa";
//   const value2 = yield value1 + "bbb";
//   const value3 = yield value2 + "ccc";
// }
// const generator = foo("why");
// const result1 = generator.next();
// console.log(result1);
// const result2 = generator.next(result1.value);
// console.log(result2);
// const result3 = generator.next(result2.value);
// console.log(result3);
// const result4 = generator.next(result3.value);
// console.log(result4);

/* function* foo() {
  const value1 = yield "why";
  console.log("value1:", value1);
  console.log("value1:", value1);
  console.log("value1:", value1);
  console.log("value11111111111111:", value1);
  const value2 = yield value1;
  const value3 = yield value2;
}
const generator = foo();
console.log(generator.next());
console.log(generator.return(123));
console.log(generator.next()); */

/* function* createArrayIterator(arr) {
  0;
  for (const item of arr) {
    yield item;
  }
}
const namesIterator1 = createArrayIterator(["jie1", "节", "123"]);
console.log(namesIterator1.next());
// for (const item of namesIterator1) {
//   console.log(item);
// }
 */

// 正则匹配
// const message = "我最喜欢的两本书:《黄金时代》和《沉默的大多数》";
// const results = message.matchAll(/《.+》/g).next();
// console.log(results);

/* const str = "<h1>title单位羽绒服请8有hello</h1>";
const result = str.match(/<(?<节>.+?)(>)/);
console.log(result);
console.log(result[0]);
console.log(result[1]);
 */

const date = new Date();
console.log(date.getTime());
console.log(+date);
console.log(Date.now());
console.log(new Date().valueOf());
console.log("parse:", Date.parse("1979-01-01"));

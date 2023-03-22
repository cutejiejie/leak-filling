const fun1 = (x) => x;

const fun2 = (x) => {
  x;
};

const fun3 = (x) => ({ x });

console.log(fun1(1)); // 1

console.log(fun2(1)); // undefined

console.log(fun3(1)); // ({1})

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];
  let path = [];
  const backTrack = (sum, startIndex) => {
    if (sum > target) return;
    if (sum === target) {
      res.push(path.slice());
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      //去重，跳过同一层中已经使用过的数字
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
      sum += candidates[i];
      path.push(candidates[i]);
      backTrack(sum, i + 1);
      path.pop();
      sum -= candidates[i];
    }
  };
  backTrack(0, 0);
  return res;
};
const result = combinationSum2([-5, 10, 1, 2, 7, 6, 1, 5], 8);
// console.log(result);

// let arr = new Array(8);
// console.log(arr);
// newArr = arr.map((item, index) => {
//   index + 1;
// });
// console.log(arr);

function formatHump(str) {
  return str
    .split("_")
    .map((item) => item[0] && item[0].toUpperCase() + item.slice(1))
    .join("");
}
console.log(formatHump("_a_b_cd_ef"));

const obj = {
  test() {
    const func = () => {
      console.log(this);
    };
    func();
  },
};

obj.test();

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function timer() {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

const obj1 = { a: 400, b: 200, c: 300 };
// Array.from(obj1);
// console.log({ ...obj1 });
let entry = Object.entries(obj1);
console.log(entry);
entry.sort((a, b) => a[1] - b[1]);
console.log(entry);
console.log(
  entry.map((item) => {
    return item[0];
  })
);

setTimeout(() => console.log(2), 0);
console.log(1);
new Promise((resolve) => resolve(3)).then((res) => {
  console.log(res);
  setTimeout(() => console.log(4), 0);
  new Promise((resolve) => resolve(5)).then((res) => console.log(res));
});

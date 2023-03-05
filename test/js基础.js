// 短路
let a = "" || false || undefined || null || 0 || NaN;
// console.log(a);

let b = [] && 1 && 4 && NaN;
// console.log(b);

const pow = (x, n) => {
  // console.log(n);
  if (n === 1) return x;
  return x * pow(x, n - 1);
  // return x;
};
const res = pow(2, 4);
// console.log(res);

// 闭包
function print(fn) {
  fn();
}
const num = 100;
function fn() {
  var jiejie = "8888888888888666666666";
  console.log(num);
}
print(fn);

function create() {
  const a = 300;
  return function () {
    console.log(a);
  };
}
const foo = create();
foo();
console.log(jiejie);
//  jiejie is not defined

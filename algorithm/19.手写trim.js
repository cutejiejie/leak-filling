String.prototype.trim = function () {
  return this.replace(/^\s+/, "").replace(/\s+$/, "");
};
let str = "    123ahjskh    ";
console.log(str.trim());

function max() {
  let arr = Array.prototype.slice.call(arguments);
  let num = 0;
  arr.forEach((el) => {
    num = num > el ? num : el;
  });
  return num;
}
const res = max(1, 10, 2, 5);
console.log(res);

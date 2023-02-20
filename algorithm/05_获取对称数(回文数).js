/* 数组反转 */
const isPalindrome1 = function (x) {
  x = x.toString();
  return x === x.split("").reverse().join("");
};

const str1 = 123371;
console.log(isPalindrome1(str1));

/* 双指针 */
// const isPalindrome2 = function (x) {
//   x = x.toString();
//   if (x.length <= 0) return false;
//   let j = x.length - 1;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === x[j]) {
//       if (i === j || j === i + 1) {
//         return true;
//       }
//       j--;
//     } else {
//       return false;
//     }
//   }
// };

const isPalindrome2 = function (x) {
  x = x.toString();
  if (x.length <= 0) return false;
  // 字符串头尾比较
  let flag = true;
  let i = 0; // 字符串开始
  let j = x.length - 1; // 字符串结束
  while (i < j) {
    if (x[i] !== x[j]) {
      flag = false;
      break;
    } else {
      // 继续比较
      i++;
      j--;
    }
  }
  return flag;
};

const str2 = 12321;
console.log(isPalindrome2(str2));

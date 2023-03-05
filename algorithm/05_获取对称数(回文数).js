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
  let i = 0; // 字符串开始
  let j = x.length - 1; // 字符串结束
  while (i < j) {
    if (x[i] !== x[j]) {
      return false;
    } else {
      // 继续比较
      i++;
      j--;
    }
  }
  return true;
};
const str2 = 8123218;
console.log(isPalindrome2(str2));

/* 
  划重点
  尽量不要转换数据结构，尤其数组这种有序结构
  尽量不要用内置API，如reverse
  不好识别复杂度
  数字操作最快，其次是字符串
 */

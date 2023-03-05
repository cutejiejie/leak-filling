const string = "aaabbccdeggggga";
const findContinuousChar1 = (str) => {
  const res = {
    char: "",
    charLength: 0,
  };
  if (str.length === 0) return res;
  for (let i = 0; i < str.length; i++) {
    let tempLength = 0;
    for (let j = i; j < str.length; j++) {
      if (str[j] === str[i]) {
        tempLength++;
      }
      if (str[j] !== str[i] || j === str.length - 1) {
        // 不相等，或者已经到了最后一个元素，要去判断最大值
        if (tempLength > res.charLength) {
          res.char = str[i];
          res.charLength = tempLength;
        }
        if (i < str.length - 1) {
          i = j - 1; // 跳步
        }
        break; // break j的循环
      }
    }
  }
  return res;
};

const result = findContinuousChar1(string);
console.log(result);

/* 
  双指针
  定义指针i和j。j 不动，i继续移动
  如果i和j的值一直相等，则i继续移动
  直到i和j的值不相等，记录处理，让j追上i。继续第一步
 */
const string2 = "aaabbccdeggggg";
const findContinuousChar2 = (str) => {
  const res = {
    char: "",
    charLength: 0,
  };
  const length = str.length;
  if (length === 0) return res;
  let i,
    j = 0;

  return res;
};

const result2 = findContinuousChar2(string2);
// console.log(result2);

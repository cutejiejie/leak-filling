const string = "aaabbccdeggggg";
const findContinuousChar1 = (str) => {
  const res = {
    char: "",
    charLength: 0,
  };
  const length = str.length;
  if (length === 0) return res;
  for (let i = 0; i < length; i++) {
    let charNum = 0;
    for (let j = i; j < length; j++) {
      if (str[j] === str[i]) {
        charNum++;
      }
      if (str[j] !== str[i] || j === length - 1) {
        // 不相等，或者已经到了最后一个元素，要去判断最大值
        if (charNum > res.charLength) {
          res.char = str[i];
          res.charLength = charNum;
        }

        if (i < length - 1) {
          i = j - 1; // 跳步
        }
        break;
      }
    }
  }
  return res;
};

const result = findContinuousChar1(string);
console.log(result);

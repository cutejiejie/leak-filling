const string = "AbcDG123Hjl";
const bigSmall = (str) => {
  let res = "";
  if (str.length === 0) return res;
  let reg1 = /[A-Z]/;
  let reg2 = /[a-z]/;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (reg1.test(c)) {
      res += c.toLowerCase();
    } else if (reg2.test(c)) {
      res += c.toUpperCase();
    } else {
      res += c;
    }
  }
  return res;
};

const result = bigSmall(string);
console.log("正则匹配法：", result);

/* ASCII码 */
const string2 = "AbcDG123Hjl@#$%!98";
const bigSmall2 = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      res += c.toLowerCase(); // 大写转小写
    } else if (code >= 97 && code <= 122) {
      res += c.toUpperCase(); // 小写转大写
    } else if (code >= 48 && code <= 57) {
      res += c; // 数字直接相加
    } else {
      res += ""; // 删除其余删除
    }
  }
  return res;
};

const result2 = bigSmall2(string2);
console.log("ASCII码法", result2);

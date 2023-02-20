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
console.log(result);

/* ASCLL码 */
const string2 = "AbcDG123Hjl";
const bigSmall2 = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    // const code = str.charCodeAt(i);
    const c = str[i];
    const code = c.charCodeAt(0);
    if (65 <= code <= 90) {
      res += c.toUpperCase();
    } else if (97 <= code <= 122) {
      res += c.toLowerCase();
    } else {
      res += c;
    }
  }
  return res;
};

const result2 = bigSmall(string2);
console.log(result2);

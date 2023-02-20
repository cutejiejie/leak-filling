const string = "AbcDG123Hjl";
const bigSmall = (str) => {
  let reg1 = /[A-Z]/;
  let reg2 = /[a-z]/;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (reg1.test(str[i])) {
      res = res + str[i].toLowerCase();
    } else if (reg2.test(str[i])) {
      res = res + str[i].toUpperCase();
    } else {
      res = res + str[i];
    }
  }
  return res;
};

const result = bigSmall(string);
console.log(result);

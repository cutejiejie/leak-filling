const isHuiWen = (s) => {
  s = s.toString();
  if (s.length <= 0) return "您的输入有误";
  if (s === s.split("").reverse().join("")) {
    s = s.split("");
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
      if (s[i] !== "a" && s[j] !== "a") {
        s[i] = "a";
        s[j] = "a";
        return s.join("");
      } else {
        i++;
        j--;
      }
    }
  } else {
    // s = s.split("");
    // let i = 0;
    // let j = s.length - 1;
    let mid = Math.floor(s.length / 2);
    let left = s.slice(0, mid);
    let right = s.slice(mid, s.length).reverse();
    console.log(left, right);
    let li = 0;
    let count;

    while (li < left.length) {
      // if (left[li] !== right[li]) {
      //   left = left.join("");
      //   right = right.join("");
      //   if (left.charCodeAt(li) < right.charCodeAt(li)) {
      //     left = left.split("");
      //     right = right.spilt("");
      //     right[li] = left[li];
      //     count++;
      //   } else {
      //     left = left.split("");
      //     right = right.spilt("");
      //     left[li] = right[li];
      //     count++;
      //   }
      // }
      // li++;
      // // j++;
    }
    console.log(left, right);
  }
};
let s = "abcde";
console.log(isHuiWen(s));

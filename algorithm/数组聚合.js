const arr = [
  { a: 1, b: 4 },
  { a: 2, b: 3 },
  { a: 2, b: 6 },
  { a: 1, b: 7 },
];

const groupArr = () => {
  let res = [];
  arr.forEach((item) => {
    if (res[item.a - 1] === undefined) {
      res[item.a - 1] = [item];
    } else {
      res[item.a - 1].push(item);
    }
  });
  return res;
};

const res = groupArr(arr);
console.log(res);

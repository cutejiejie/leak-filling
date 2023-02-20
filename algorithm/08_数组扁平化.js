const arr = [1, 2, [8, [5, 4, [2, 7, 3]]], 9];

const flatten = (arr) => {
  let res = [];
  arr.forEach((el) => {
    // console.log(el);
    res = res.concat(el);
  });
  // console.log(res);
  return res;
};

const res = flatten(arr);
console.log(res);

/* 
 先实现一级扁平化，然后递归调用，直到全部扁平
 */
const allFlatten = (arr) => {
  const flatten = (item) => {
    if (!Array.isArray(item)) return item;
    let res = [];
    item.forEach((el) => {
      res = res.concat(Array.isArray(el) ? flatten(el) : el);
    });
    return res;
  };
  const result = flatten(arr);
  return result;
};

console.log(allFlatten(arr));

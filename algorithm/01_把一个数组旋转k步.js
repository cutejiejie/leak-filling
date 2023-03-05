const arr1 = [1, 2, 3, 4, 5, 6, 7];
const rotate1 = (arr, step) => {
  step = Math.abs(step % arr.length);
  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n != null) {
      arr.unshift(n);
    }
  }
  return arr;
};
const res1 = rotate1(arr1, 3);
console.log("res1:", res1);
// res1: [5, 6, 7, 1, 2, 3, 4];

const arr2 = [1, 2, 3, 4, 5, 6, 7];
const rotate2 = (arr, step) => {
  if (!step || arr.length === 0) return arr;
  // abs取绝对值
  step = Math.abs(step % arr.length);
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, arr.length - step);
  const part3 = part1.concat(part2);
  return part3;
};
const res2 = rotate2(arr2, 3);
console.log("res2:", res2);
// res2: [5, 6, 7, 1, 2, 3, 4];

// 思路1 :时间复杂度O(n^2) , 空间复杂度O(1)
// 思路2 :时间复杂度O(1) , 空间复杂度O(n)

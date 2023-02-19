const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

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

const res1 = rotate1(arr, 9);
console.log(res1);

const rotate2 = (arr, step) => {
  if (!step || arr.length === 0) return arr;
  step = Math.abs(step % arr.length);
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, arr.length - step);
  arr = part2.concat(part1);
  return arr;
};

const res2 = rotate1([]);
console.log(res2);

const arr = [1, 2, 3, 4, 6, 9];
const findNum = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;
  const res = [];
  while (i < j) {
    console.log(i, j);
    if (nums[i] + nums[j] > target) {
      j--;
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else {
      res.push(i);
      res.push(j);
      break;
    }
  }
  console.log(res);
  return res;
};
console.log(findNum(arr, 6));

const arr = [1, 2, 3, 4, 6, 9];
const findNum = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;
  const res = [];
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j--;
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
  return "找不到";
};
console.log(findNum(arr, 7));

/* 
  将数组中的0移动到末尾
  如输入[1,0,3,0,11,0] ,输出[1, 3, 11, 0, 0, 0]
  只移动0 , 其他顺序不变
  必须在原数组进行操作
 */
const arr = [1, 0, 0, 3, 0, 11, 0, 0];
const moveArr1 = (arr) => {
  const length = arr.length;
  if (length === 0) return;
  let zeroLength = 0;
  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--; // 数组截取了一个元素，i要递减，否则连续0就会有错误
      zeroLength++; // 累加0的长度
    }
  }
};

moveArr1(arr);
console.log(arr);

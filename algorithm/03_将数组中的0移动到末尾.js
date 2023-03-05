/* 
  将数组中的0移动到末尾
  如输入[1,0,3,0,11,0] ,输出[1, 3, 11, 0, 0, 0]
  只移动0 , 其他顺序不变
  必须在原数组进行操作
 */
const arr = [1, 0, 0, 3, 0, 11, 0, 0];
const moveArr1 = (arr) => {
  if (arr.length === 0) return;
  let zeroLength = 0;
  for (let i = 0; i < arr.length - zeroLength; i++) {
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

/* 
  双指针
  定义j指向第一一个0，i指向j后面的第一个非0
  交换i和j的值，继续向后移动
  只遍历一次，所以时间复杂度是O(n)
 */
const arr2 = [1, 0, 0, 1, 1, 0, 4, 8];
const moveArr2 = (arr) => {
  if (arr.length === 0) return;
  let j = -1; // 指向第一个0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && j < 0) {
      console.log("----------------", j);
      j = i;
    }
    // 说明j已经指向了第一个0
    if (arr[i] !== 0 && j >= 0) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
};
moveArr2(arr2);
console.log(arr2);

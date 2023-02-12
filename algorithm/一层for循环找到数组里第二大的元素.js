const arr = [4, 6, 5, 3, 9, 8, 4, 7, 11, 2];

/* 数组只整理了第一大和第二大的元素，分别放在了 index 为 0 和 1 的位置，并没有完全排序
只使用了一层循环
没使用额外空间 */
const oneSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === 1 && arr[1] > arr[0]) {
      arr.unshift(arr[i]);
      arr.splice(i + 1, 1);
    } else if (arr[i] < arr[0] && arr[i] > arr[1]) {
      arr[1] = arr[i];
      arr.splice(i, 1);
      i--;
    } else if (arr[i] > arr[0] && arr[i] > arr[1]) {
      arr.unshift(arr[i]);
      arr.splice(i + 1, 1);
    }
  }
};

oneSort(arr);
console.log(arr);

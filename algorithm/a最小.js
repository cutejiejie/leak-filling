const arr = [
  { a: 2, b: 2 },
  { a: 6, b: 3 },
  { a: 4, b: 9 },
  { a: 3, b: 1 },
];

// function sortAB(arr) {
//   arr.sort((a, b) => {
//     return a.a - b.b;
//   });
// }

function sortAB(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[0].a > arr[i].a) {
      const temp = arr[i];
      arr[i] = arr[0];
      arr[0] = temp;
    } else if (arr[0].a === arr[i].a && arr[0].b < arr[i].b) {
      const temp = arr[i];
      arr[i] = arr[0];
      arr[0] = temp;
    }
  }
}
sortAB(arr);
console.log(arr);

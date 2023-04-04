/* const pow = (x, n) => {
  if (n === 1) return x;
  return x * pow(x, n - 1);
};
const res = pow(3, 4);
console.log(res);

// const arr = "jiejie节节";
// for (let key in arr) {
//   console.log(key, arr[key]);
// }
const arr = [1, 8, 3, 6, 2, 6];
// const resu = arr.map((el) => el + "必胜！！！");
const resu = arr.filter((el) => el > 2);
// console.log(resu);

const res1 = arr.reduce((pre, cur) => pre + cur);
// console.log(res1);

function foo() {
  var a = (b = 100);
}
foo();
// console.log(a);
console.log(b);

const add = (x) => (y) => (z) => x + y + z;
console.log(add(10)(20)(30));
 */

function foo1() {
  "use strict";
  console.log(this, arguments);
}
foo1.apply(123, ["节", "节节必胜！！", "奥里给"]);
const a = { bill: 500, sam: 480, roark: 501 };
console.log(Object.entries(a));

var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;
  let rootNode = preorder[0];
  let inoIndex = inorder.indexOf(rootNode);
  const root = new TreeNode(rootNode);
  root.left = buildTree(
    preorder.slice(1, inoIndex + 1),
    inorder.slice(0, inoIndex)
  );
  root.right = buildTree(
    preorder.slice(inoIndex + 1),
    inorder.slice(inoIndex + 1)
  );
  return root;
};

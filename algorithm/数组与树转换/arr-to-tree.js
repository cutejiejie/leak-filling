const arr = [
  { id: 1, name: "部门A", parentId: 0 }, // 0 代表顶级节点，无父节点
  { id: 2, name: "部门B", parentId: 1 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 2 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
];

const convert = (arr) => {
  const map = new Map();
  arr.forEach((item) => {
    if (!map.has(item.parentId)) {
      map.set(item.parentId, [item]);
    } else {
      map.get(item.parentId).push(item);
    }
  });
  console.log(map);

  let res = map.get(0)[0];
  // map.forEach((item) => {
  //   item.forEach((el) => {
  //     el.children = map.get(el.id);
  //   });
  // });
  const rec = (node) => {
    node.children = map.get(node.id);
    if (!node.children) return;
    node.children.forEach((item) => {
      rec(item);
    });
  };
  rec(res);
  console.log(res);
};
const res = convert(arr);
// console.log(arr);

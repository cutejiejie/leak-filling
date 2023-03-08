const obj = {
  id: 1,
  name: "部门A",
  children: [
    {
      id: 2,
      name: "部门B",
      children: [
        { id: 4, name: "部门D" },
        { id: 5, name: "部门E" },
      ],
    },
    {
      id: 3,
      name: "部门C",
      children: [{ id: 6, name: "部门F" }],
    },
  ],
};

const treeToArr = (obj) => {
  let res = [];
  let q = [obj];
  while (q.length) {
    const n = q.shift();
    if (n.id === 1) {
      n.parentId = 0;
    }
    res.push(n);
    if (n.children) {
      n.children.forEach((el) => {
        el.parentId = n.id;
        q.push(el);
      });
      delete n.children;
    }
  }
  return res;
};
const res = treeToArr(obj);
console.log(res);

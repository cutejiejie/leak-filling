//完成 convert(list) 函数，实现将 list 转为 tree
/**
 * @param list {object[]},
 * @param parentKey {string}
 * @param currentKey {string}
 * @param rootValue {any}
 * @return object
 */

const list = [
  {
    id: 19,
    parentId: 0,
  },
  {
    id: 18,
    parentId: 16,
  },
  {
    id: 17,
    parentId: 16,
  },
  {
    id: 16,
    parentId: 0,
  },
];
function convert(list, parentKey, currentKey, rootValue) {
  const map = new Map();
  const tree = { id: rootValue };
  list.forEach((el) => {
    if (!map.has(el[parentKey])) {
      map.set(el[parentKey], [el]);
    } else {
      map.get(el[parentKey]).push(el);
    }
  });
  console.log(map);
  // const res = Object.fromEntries(map);
  tree.children = map.get(rootValue);
  // console.log(tree);
  let p = tree;
  tree.children = map.get(rootValue);
}

const result = convert(list, "parentId", "id", 0);
const tree = {
  id: 0,
  children: [
    {
      id: 19,
      parentId: 0,
    },
    {
      id: 16,
      parentId: 0,
      children: [
        {
          id: 18,
          parentId: 16,
        },
        {
          id: 17,
          parentId: 16,
        },
      ],
    },
  ],
};

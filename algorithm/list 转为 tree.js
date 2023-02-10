//完成 convert(list) 函数，实现将 list 转为 tree
/**
 * @param list {object[]},
 * @param parentKey {string}
 * @param currentKey {string}
 * @param rootValue {any}
 * @return object
 */
function convert(list, parentKey, currentKey, rootValue) {}

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

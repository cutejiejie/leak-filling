const getType = (item) => {
  const originType = Object.prototype.toString.call(item); // '[object Null]'
  const spaceIndex = originType.indexOf(" ");
  const type = originType.slice(spaceIndex + 1, -1).toLowerCase(); // 'null'
  return type;
};

console.log(getType(null));
console.log(getType(undefined));
console.log(getType(123));
console.log(getType("abc"));
console.log(getType(true));
console.log(getType(Symbol()));
console.log(getType({}));
console.log(getType([]));
console.log(getType(() => {}));

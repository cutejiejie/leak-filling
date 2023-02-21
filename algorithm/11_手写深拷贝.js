function deepClone(obj = {}, map = new Map()) {
  if (typeof obj !== "object") {
    return obj;
  }
  if (map.get(obj)) {
    return map.get(obj);
  }
  let result = {};
  if (
    obj instanceof Array ||
    Object.prototype.toString.call(obj) === "[object Array]"
  ) {
    result = [];
  }
  map.set(obj, result);
  for (const key in obj) {
    if (obj.hasOwnproperty(key)) {
      result[key] = deepClone(obj[key], map);
    }
  }
  return result;
}

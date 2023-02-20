class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  running() {
    console.log(this.name + "running~");
  }
}

function customNew(constructor, ...args) {
  // 1. 创建一个空对象，继承constructor的原型
  const obj = Object.create(constructor.prototype);
  // 2，将obj作为this ，执行constructor ，传入参数
  constructor.apply(obj, args);
  // 3. 返回obj
  return obj;
}
const f = customNew(Person, "jiejie", 23, 1.65);
console.log(f);

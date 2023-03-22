console.log("this is index js");
const sum = (a, b) => {
  return a + b;
};
const res = sum(10, 20);
console.log(res);
class Person {
  constructor(name, age, height) {
    this._name = name;
    this.age = age;
    this.height = height;
  }

  running() {
    console.log(`${this._name}在奔跑~~~`);
  }
  static create() {
    console.log("我是类方法");
  }
  set name(newName) {
    console.log("调用了name 的getter方法");
    this._name = newName;
  }
  static {
    console.log("我是静态代码块");
  }
}
const p = new Person("节节", 24, 1.65);
p.running();
p.name = 18;
console.log("p.name", p._name);
Person.create();

console.log(100);

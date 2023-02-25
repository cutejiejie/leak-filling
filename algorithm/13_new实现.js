class Foo {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  static {
    console.log("我是类的静态方法");
  }
  running() {
    console.log(`${this.age}的${this.name}在running,`);
  }
}

// const foo1 = new Foo("jiejie", 18, 1.65);
// // console.log(foo1.running());
// foo1.running();

function myNew(fn, name, age, height) {
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, [...arguments].slice(1));
  return typeof res === "object" ? res : obj;
}
const foo2 = myNew(Foo, "foo2-", 18, 1.65);
foo2.running();

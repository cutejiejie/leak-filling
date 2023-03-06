class LazyMan {
  tasks = [];
  #age = 24;
  constructor(name) {
    this.name = name; // 对象中的属性: 在constructor通过this设置
    setTimeout(() => {
      this.next();
    });
  }
  next() {
    const task = this.tasks.shift(); // 取出当前task的第一个任务
    if (task) task();
  }
  eat(food) {
    const task = () => {
      console.log(`${this.name} eat ${food}`);
      this.next();
    };
    this.tasks.push(task);
    console.log("this是什么", this);
    return this;
  }
  sleep(seconds) {
    const task = () => {
      console.log(`${this.name} 开始睡觉`);
      setTimeout(() => {
        console.log(`${this.name} 已经睡完了${seconds}s，开始执行下一个任务`);
        this.next();
      }, seconds * 1000);
    };
    this.tasks.push(task);
    return this;
  }
}
const me = new LazyMan("jiejie");
me.eat("苹果").eat("香蕉").sleep(3).eat("葡萄");
// console.log(me.#age);
// 属性"#age"在类"LazyMan" 外部不可访问，因为它具有专用标识符。

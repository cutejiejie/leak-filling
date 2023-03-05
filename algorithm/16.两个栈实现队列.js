class MyQueue {
  constructor() {
    // 存储栈
    this.stack = [];
    // 辅助栈
    this.helpStack = [];
  }
  // 添加元素
  push(x) {
    while (this.stack.length !== 0) {
      this.helpStack.push(this.stack.pop());
    }
    this.helpStack.push(x);
    while (this.helpStack.length !== 0) {
      this.stack.push(this.helpStack.pop());
    }
  }
  // 删除元素
  pop() {
    return this.stack.pop();
  }
  // 返回队列顶部元素
  peek() {
    return this.stack[0];
  }
  // 判断队列是否为空
  isEmpty() {
    return this.stack.length === 0;
  }
}
const q1 = new MyQueue();
q1.push(1);
q1.push(2);
q1.push(8);
q1.push(10);
console.log(q1);
console.log(q1.pop());
console.log(q1);
console.log(q1.peek());
q1.push(28);
console.log(q1);

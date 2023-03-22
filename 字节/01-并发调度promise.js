// class Scheduler {
//   constructor(limit) {
//     this.limit = limit;
//     this.member = 0;
//     this.queue = [];
//   }
//   addTask(timeout, str) {
//     this.queue.push([timeout, str]);
//   }
//   start() {
//     if (this.member < this.limit && this.queue.length) {
//       let [timeout, str] = this.queue.shift();
//       this.member++;
//       setTimeout(() => {
//         console.log(str);
//         this.member--;
//         this.start();
//       }, timeout * 1000);
//       this.start();
//     }
//   }
// }
// //支持并发的调度器， 最多允许2两任务进行处理
// const scheduler = new Scheduler(2);
// scheduler.addTask(1, "1"); // 1s后输出’1'
// scheduler.addTask(2, "2"); // 2s后输出’2'
// scheduler.addTask(1, "3"); // 2s后输出’3'
// scheduler.addTask(1, "4"); // 3s后输出’4'
// scheduler.start();

class Scheduler {
  constructor() {
    this.queue = [];
    this.limit = 2;
    this.member = 0;
  }
  add(promiseCreator) {
    this.queue.push(promiseCreator);
  }
  start() {
    if (this.member < this.limit && this.queue.length) {
      this.member++;
      this.queue
        .shift()()
        .then(() => {
          this.member--;
          this.start();
        });
      this.start();
    }
  }
}

// class Scheduler {
//   constructor() {
//     this.queue = [];
//     this.maxCount = 2;
//     this.runCounts = 0;
//   }
//   add(promiseCreator) {
//     this.queue.push(promiseCreator);
//   }
//   start() {
//     for (let i = 0; i < this.maxCount; i++) {
//       this.request();
//     }
//   }
//   request() {
//     if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
//       return;
//     }
//     this.runCounts++;

//     this.queue
//       .shift()()
//       .then(() => {
//         this.runCounts--;
//         this.request();
//       });
//   }
// }

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

scheduler.start();

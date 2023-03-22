let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
Promise.race([p1, p2]).then(
  (res) => console.log(res),
  (err) => console.log(err)
);

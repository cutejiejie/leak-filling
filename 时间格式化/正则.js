let message = "Hello ABC, abc, Abc, AAaBC";
const pattern = /abc/gi;
const results = message.match(pattern);
// console.log(results);
// console.log(message.replaceAll(pattern, "ABC"));

// const fileNames = ["abc.js", "cba.java", "nba.html", "mba.js", "aaa.jsx"];
// const newNames = fileNames.filter((el) => /\.jsx?$/gi.test(el));
// console.log(newNames);

const iterator = message.match(/(?<why>hel)lo/i);
// for (const item of iterator) {
//   console.log(item);
// }
console.log(iterator);

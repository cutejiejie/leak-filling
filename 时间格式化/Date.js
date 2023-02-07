const date1 = new Date();
const date2 = new Date(1000);
const date3 = new Date("2022-08-08");
const date4 = new Date(2022, 08, 08, 08, 08, 08, 08);

// Unix 时间戳：它是一个整数值，表示自1970年1月1日00:00:00 UTC以来的毫秒数。
const date5 = new Date().getTime();
const date6 = new Date().valueOf();
const date7 = +new Date();
const date8 = Date.now();
console.log(date8);

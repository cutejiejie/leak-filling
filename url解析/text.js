const url =
  "https://www.baidu.com/m?f=8&ie=utf-8&rsv_bp=1&tn=monline_3_dg&wd=session";
/* function queryURLparams(url) {
  let obj = {};
  if (url.indexOf("?") < 0) return obj;
  let arr = url.split("?");
  url = arr[1];
  let array = url.split("&");
  for (let i = 0; i < array.length; i++) {
    let item = array[i].split("=");
    obj[item[0]] = item[1];
  }
  return obj;
}
console.log(queryURLparams(url)); */

function queryURLparams(url) {
  if (url.indexOf("?") < 0) return obj;
  let arr = url.split("?");
  paramsString = arr[1];
  const searchParams = new URLSearchParams(paramsString);
  return Object.fromEntries(searchParams);
}
console.log(queryURLparams(url));

// 方法【3】
// function queryURLparamsRegEs5(url) {
//   let obj = {};
//   let reg = /([^?=&]+)=([^?=&]+)/g;
//   url.replace(reg, function () {
//     obj[arguments[1]] = arguments[2];
//   });
//   return obj;
// }

// 方法【4】
// function queryURLparamsRegEs6(url) {
//   let obj = {};
//   let reg = /([^?=&]+)=([^?=&]+)/g;
//   url.replace(reg, (...arg) => {
//     obj[arg[1]] = arg[2];
//   });
//   return obj;
// }

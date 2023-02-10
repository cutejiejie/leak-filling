function debounce(fn, time) {
  let timeout = null;
  let flag = true;
  return function () {
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
      }, time);
    }
  };
}

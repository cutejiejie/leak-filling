function currying(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...newArgs) {
        return curried.apply(this, args.concat(newArgs));
      };
    }
  }
  return curried;
}

function foo(x, y, z) {
  console.log(x + y + z);
}

var fooCurry = currying(foo);
fooCurry(10)(20)(30);

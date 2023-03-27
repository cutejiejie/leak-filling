const pow = (x, n) => {
  if (n === 1) return x;
  return x * pow(x, n - 1);
};
const res = pow(3, 4);
console.log(res);

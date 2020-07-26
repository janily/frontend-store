let demoFun = function (argA, ...args) {
  console.log(argA);
  console.log(args);
}

demoFun(1, 2, 3)


function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));


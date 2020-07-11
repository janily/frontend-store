const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((accumulator, current, currentIndex, array) => {
  // 输出回调函数的4个参数可以看到实际执行的过程
  console.log(accumulator, current, currentIndex, array);
  return accumulator + current
})

console.log(sum)
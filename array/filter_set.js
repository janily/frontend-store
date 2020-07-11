const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 5];

const nums = numbers.filter((value, index, arr) => {
  // 筛选符合条件找到的第一个索引值等于当前索引值的数组
  return arr.indexOf(value) === index;
});

console.log(nums)
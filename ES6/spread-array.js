// 合并数组

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [
  ...array1,
  ...array2
];

console.log(mergedArray)

// 复制数组

const original = ['zero', 'one'];
const newArray = [...original];

console.log(newArray)

//字符串转数组

const string = 'hi';
const array = [...string];

console.log(array)




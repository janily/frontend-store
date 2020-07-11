const numbers = [1, 2, 3, 4]

let sum = 0;

numbers.forEach((item, index, arr) => {
  sum += item;
})

console.log(sum)
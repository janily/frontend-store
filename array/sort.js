const numbers = [11, 12, 5, 9, 4];

const re = numbers.sort(compare);

function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(re)
const ocean = ['🐙', '🦀', '🦀', 1, 2, 3, 1, 2];

console.log([...new Set(ocean)])


const narr = ocean.filter((item, index) => {
  return ocean.indexOf(item) === index
});

console.log(narr)

const rarr = ocean.reduce((unique, item) =>
  unique.includes(item) ? unique : [...unique, item], []);

console.log(rarr)



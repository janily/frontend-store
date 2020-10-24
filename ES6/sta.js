
const string = 'split-by-dash';
const usingSplit = string.split('-');
console.log(usingSplit)
const usingSpread = [...string];
console.log(usingSpread)
const usingArrayFrom = Array.from(string);
console.log(usingArrayFrom)
const usingObjectAssign = Object.assign([], string);
console.log(usingObjectAssign)



const users = [
  { name: "janily", age: 18 },
  { name: "apple", age: 15 },
  { name: "orange", age: 12 }
];

const re = users.find(user => user.name === 'xyz');

console.log(re)
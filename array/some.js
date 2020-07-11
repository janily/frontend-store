const users = [
  { name: 'janliy', age: 30 },
  { name: 'reicky', age: 35 },
  { sumname: 'jacky', age: 12 }
]

const re = users.some(user => user.age >= 20);

console.log(re)
const user = [

  {
    name: 'janily', age: 26
  },
  {
    name: 'reicky', age: '12'
  },
  {
    name: 'jacky',
    age: '16'
  }
]

const adults = user.filter(person => person.age >= 18);

console.log(adults)




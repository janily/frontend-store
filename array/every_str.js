const users = [
  {
    name: 'janliy'
  },
  {
    name: 'reicky'
  },
  {
    sumname: 'jacky'
  }
]


const re = users.every(user => user.name !== undefined);


console.log(re);
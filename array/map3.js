const users = [
  { name: 'janily', email: '111@111.com' },
  { name: 'jacky', email: '111@111.com' },
  { name: 'reicky', email: '111@111.com' }
];

const usernames = users.map(user => user.email);

console.log(usernames);
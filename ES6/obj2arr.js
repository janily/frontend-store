const  reicky = { 
    name:"reicky chen", 
    age:18, 
    born:09-11, 
    contry:"China" 
}

console.log(Object.keys(reicky));
console.log(Object.values(reicky));

function printUser({name,age,born,country = 'reicky'}) {
    console.log(`name is ${name}. Age is ${age}`);
}


printUser(reicky);

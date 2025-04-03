let users = [
  { name: "Elza", email: "el.123@gmail.com", age: 35 },
  { name: "Orest", email: "rest.123@gmail.com", age: 23 },
  { name: "Emily", email: "el.321@gmail.com", age: 26 },
  { name: "Alex", email: "alex.323@gmail.com", age: 19 },
];

for (let user of users) {
  let { name, email, age } = user;
  console.log(`Name: ${name}, E-mail: ${email}, Age: ${age}`);
}

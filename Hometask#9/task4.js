let person = {
  firstName: "Alex",
  lastName: "Tester",
  age: 40,
};
person.email = "alex.tester@gmail.com";
delete person.age;
console.log(person);

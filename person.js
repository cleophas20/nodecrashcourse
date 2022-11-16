class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }

  birthday() {
    console.log(`My name is ${this.name} and I am ${this.age +1}`);
  }
}
module.exports = Person;

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email; 
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let sarah = new User('sarah', 'sarah@gmail.com')
console.log(sarah.sayHello());

class Teacher extends User {
  teachMath() {
    return `My name is ${this.name} and  1 + 1 is 2.`
  }
  sayHello() {
    super.sayHello()
    console.log('hello')
  }

}

let tom = new Teacher("Tom", "tom@geocities.edu")

console.log(tom.teachMath());
console.log(tom.sayHello());
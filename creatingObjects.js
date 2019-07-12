function User () {

}
User()

new User

function User(name, age, hometown) {
  this.name = name
  this.age = age
  this.hometown = hometown
}

const bobby = new User('bobby', 20, 'Philadelphia')

console.log(bobby);

bobby.age = 27;

console.log(bobby.age);

const fidoDido = new User('sally', 28, 'Boston')

function User (name, email) {
  this.name = name
  this.email = email
  this.sayHello = function(){
    console.log(`Hello everybody!, ny name is ${this.name}!`);
  }
}
let bob = new User('bob', 'bob@gmail.com')
let susan = new User('susan', 'susan@gmail.com')

// bob.sayHello = function() {
//   console.log('Hello everybody')
// }

console.log(bob.sayHello());
console.log(susan.sayHello());
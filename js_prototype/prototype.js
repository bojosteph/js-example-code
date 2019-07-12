function User(name, email) {
  this.name = name;
  this.email = email;
  
}

User.prototype.sayHello = function() {
  console.log(`Hello everybody, my name is ${this.name}`);
};

let sarah = new User('sarah', 'sarah@aol.com');
console.log(sarah.sayHello());

console.log(typeof User.prototype);

function Student() {
}
  Student.prototype.sayName = function() {
    console.log(this.name)
  }

  function EightGrader(name) {
    this.name = name
    this.grade = 8
  }

  EightGrader.prototype = Object.create(Student.prototype)

  const carl = new EightGrader("carl")
  carl.sayName()
  carl.grade

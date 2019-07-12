const oldStandardFunction = function() {
  return 'old standard function rule!';
};

const arrowFunction = () => {
  return 'Arrow functions are great too!';
};

const newSquare = n => n * n;

console.log(newSquare(3));

const pythagoreanTheorem = (a, b) => Math.sqrt(newSquare(a) + newSquare(b));

console.log(pythagoreanTheorem(3, 4));

const person = {
  firstName: 'bob',
  greet: function() {
    return () => {
      return `Hi, I'm ${this.firstName}`;
    };
  }
};

console.log(person.greet()());

const person1 = {
  firstName: 'babe',
  greet: function() {
    return [1,2,3].map(() => this);
  }
};

console.log(person1.greet())
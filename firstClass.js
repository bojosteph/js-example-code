const myObj = {};

const myFunc = function() {
  return 6 + 9;
};

console.log(myFunc);


const arrayOfObjects = [
  {name: 'Sandi Metz'},
  {
    name: 'Anita Borg'
  }, {
    name: 'Ada Lovelace'
  }
];

const arrayOfFunctions = [
  function () {
    console.log('Functions');
  },
  function () {
    console.log('are');
  },
  function () {
    console.log('so');
  },
  function () {
    console.log('cool!');
  }
];

arrayOfFunctions[0]();

for (const fn of arrayOfFunctions) {
  fn();
}


const ada = {
  fullname: 'Ada Lovelace',
  greet: function(name) {
    console.log(`Hi there ${name}, I'm Ada Lovelace.`);
  },
  claimToFame: function() {
    console.log(`I was the first computer programmer.`);
  }
};

console.log(ada.greet('Roberto'));


const createDivisibleFunction = function(divisor) {
  return function(num) {
    return num % divisor === 0
  };
};

const divisibleBy3 = createDivisibleFunction(3);


console.log(divisibleBy3(9))
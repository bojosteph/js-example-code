
// console.log(one)
// var one = 1;
// var one = 2;
// console.log(one)

// function marry(...args) {
//   console.log('arguments', args)
//   console.log(Array.from(arguments))
//   return `${args[0]} is now married to ${args[1]}`
// }

// console.log(marry('Tim', 'Tom'))

// function two() {
//   var isValid;
// }

// function one() {
//   var isValid = true;
//   two();
// }

// var isValid = false;
// console.log(two())

// function weird() {
//   height = 50;
//   return height
// }

// weird()

// function a() {
//   var secret = '12345'
// }

function loop() {
  for(let i = 0; i < 5; i++) {
    console.log(i)
  }

}
// console.log( loop())
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = function() {
      console.log('b', this)
    }
    return anotherFunc.bind(this)
  }
}

function a() {
  console.log('Hi')
}
a.call()

const wizard = {
  name: 'Merlin',
  health: 50,
  heal(a, b) {
    return this.health += a + b;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 30
}
console.log('1', archer)
const healArcher = wizard.heal.bind(archer, 100, 40)
healArcher()
console.log('2', archer)


const array = [1, 2, 3];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr)
}

getMaxNumber(array) 

function multiply(a,b) {
  return a*b
}

let multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(4))
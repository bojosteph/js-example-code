
let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
    
    return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'KiKi',
  fight() {
    return 1
  }
}

lizard.__proto__ = dragon;

// for(let prop in lizard) {
//   // console.log(prop)


// if (lizard.hasOwnProperty(prop)) {
//   console.log(prop)
// }

// }

let human = {
  mortal: true
}

let socrates = Object.create(human)
socrates.age = 45


Date.prototype.lastYear = function() {
  return this.getFullYear() - 1;
}

Array.prototype.map = function() {
  let arr = [];
  for(let i=0; i< this.length; i++) {
    arr.push((this[i] + '$'))
  }
  return arr
}

console.log([1,2,3].map())

Function.prototype.bind = function(whoIsCallingMe) {
  const self = this;
  return function() {
    return self.apply(whoIsCallingMe, arguments)
  };
}


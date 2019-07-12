let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
day1.wolf = false;
console.log(day1.wolf);
console.log(Object.keys(day1));

const score = {visitors: 1, home: 0};
score.visitors = 1;
console.log(score);


let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "))

let string = JSON.stringify({
  squirrel: false,
  events: ["weekend"]
});
console.log(string)
console.log(JSON.parse(string).events)

function range(start, end, step) {
  var newRange = [];
  var step = step || 1;
  if (start < end)

  for ( var i = start; i <= end; i += step) {
    newRange.push(i);
  } else {
    for (var i = start; i >= end; i += step) {
      newRange.push(i);
    }
  }
  return newRange
}

console.log(range(1, 10));
console.log(range(5, 2, -1));

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function sum(arr) {
  return arr.reduce((reducer));
}

console.log(sum(range(1, 10)));


this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function () { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
console.log(retrieveX());   

function list() {
  return Array.prototype.slice.call(arguments)
}

function addArguments(arg1, arg2) {
  return arg1 + arg2
}

var list1 = list(1, 2, 3);

var result1 = addArguments(1, 2);

var leadingThirtsevenList = list.bind(null, 37);
var list2 = leadingThirtsevenList();

var addThirtySeven = addArguments.bind(null, 37);

var list3 = leadingThirtsevenList(1, 2, 3);

var result2 = addThirtySeven(5);

console.log(list3);
console.log(result2);

function reverseArray(array) {
  let reversed = []
  for (var i = 0; i < array.length; i++) {
    reversed.unshift(array[i]);
  }
  return reversed
}

console.log(reverseArray(["A", "B", "c"]))

function reverseArrayPush(array) {
  let reversed = []
  for (var i = array.length-1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

console.log(reverseArrayPush(["A", "B", "C"]))

const reverseArrayInPlace = (arr) => {
  let temp;
  for( let i = 0; i < Math.floor(arr.length/2); i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length -1 -i] = temp;
  }
  return arr;
}
let arrayValue = [1 ,2, 3, 4, 5]
console.log(reverseArrayInPlace(arrayValue));

// const arrayToList = (arr) => {
//   let list = null;
//   for(let i = arr.length-1; i >= 0; i--) {
//     list = {
//       value: arr[i],
//       rest: list
//     }
//   }
//   return list;
// }

// console.log(arrayToList([10, 20]));

const arrayToList = (arr) => {
  let list = null;
  for( let i = arr.length-1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list 
    }
  }
  return list;
}

console.log(arrayToList([10, 20]));

const listToArray = (list) => {
  let arr = [];
  for (let i = list; i; i = i.rest) {
    arr.push(i.value);
  }
  return arr;
}

const prepend = (value, rest) => {
  let list = {
    value: value,
    rest: rest
  }
  return list
}

console.log(prepend(10, prepend(20, null)));


const  nth = (li, n) => {
   var elem; 
   var count = 0;
 
   for(var i = li; i; i = i.rest, count++) {
     if(count === n) {
       elem = i.value;
       break;
     }
   }
   return elem;
}


console.log(listToArray(arrayToList([10, 20, 30])))
console.log(nth(arrayToList([10, 20, 30]), 1))

const deepEqual = (obj1, obj2) => {
  if(typeof obj1 === typeof obj2) {
    if (obj1 === obj2) {
      return true;
    } else if (obj1 && obj2) {
      if (typeof obj1 ==='object' && typeof obj2 === 'object') {
        for(var prop in obj1) {
          for(var prop2 in obj2) {
            if(prop === prop2) {
              if(!deepEqual(obj1[prop], obj2[prop])) {
                return false;
              }
            }
          }
        }
      return true;
      }
    }
  }
 return false;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

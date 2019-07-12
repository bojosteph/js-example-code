const obj = {
  two() {
    return 2;
  }
}

// console.log(obj.two())

console.log('1');
setTimeout(() => {console.log('2'), 1000});
console.log('3');



function printName() {
  return 'Roberto Samia'
}

function findName() {
  return printName()
}

function sayMyName() {
  return findName()
}

console.log(sayMyName())
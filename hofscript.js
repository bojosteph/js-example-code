const multiplyBy = function(num1) {
  return function(num2) {
    return num1*num2
  }
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)

const boo = (string) => (name) => (name2) =>
console.log(`${string} ${name} ${name2}`)

function heavyDuty(index) {
  const bigArray = new Array(7000).fill('😁')
  return bigArray[index]
}
 const getHeavyDuty = heavyDuty2();
 getHeavyDuty(27)

function heavyDuty2() {
  const bigArray = new Array(7000).fill('$')
  console.log('Created Again')
  return function(index) {
    return bigArray[index]
  }
}





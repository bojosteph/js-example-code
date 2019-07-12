function addItem(item) {
  const cart = []
  cart.push(item)
  return cart
}

console.log(addItem('apple'))

const array = [1,2,3]
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop()
  return newArray
} 

function multiplyByTwo(arr) {
  return arr.map(item => item*2)
}

console.log(removeLastItem(array))
console.log(multiplyByTwo(array))
console.log(array)

for(let i = 0; i < 1000; i++) {
  console.log(i)
}

[1,2,3].forEach(item => console.log(item))

const obj = {name: 'Andrei'}

function clone(obj) {
  return {...obj}
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Nana'
  return obj2

}

const updatetedObj =  updateName(obj)
console.log(obj, updatetedObj)
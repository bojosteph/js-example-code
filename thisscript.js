// var b = {
//   name: 'jay',
//   say() {console.log(this)}
// }

// var c = {
//   name: 'jay',
//   say() {return function(){
//     console.log(this)
//   }}
// }

// var d = {
//   name: 'jay',
//   say() {
//     return () => console.log(this)
//   }
// }


// const character = {
//   name: 'Simon',
//   getCharacter() {
//     return this.name;
//   }
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character)

// //How Would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

// function subtractTwo(num) {
//   return num - 2;
// }

// function calculate() {
//   const sumTotal = 4 + 5;
//   return subtractTwo(sumTotal)
// }
// // debugger;
// calculate()


// function inception() {
//   inception()
// }

// inception()

// let array = [];
// for(let i = 5; i > 1; i++) {
//   array.push(i - 1)
// }
// console.log('1')
// setTimeout(()=> {console.log('2'), 0})
// console.log('3')


const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    setTimeout(()=> {removeItemsFromList(), 0});
  }
};

removeItemsFromList();

// console.log(list);

setTimeout(() => {console.log('1')}, 0)
Promise.resolve('hi').then(()=> console.log('2'));
console.log('3')
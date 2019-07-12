// const pbj = {
//   name: 'PB&J',
//   bread: 'White',
//   ingredients: ['Peanut Butter', 'Jelly'],
//   cut: 'Triangles',
//   serve: function() {
//     console.log(`Here's your ${this.name}. Enjoy!`);
//   }
// };

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log (
      `Your ${this.name} includes: ${this.ingredients.join(', ')}. Yum!`
    );
  };
  
}

// function serve(customer) {
//   console.log(`Hey ${customer}, here's your ${this.name}. Enjoy!`);
// }
const bit = new Sandwich(
  'White',
  ['Bacon', 'Lettuce', 'Tomato', 'Mayo'],
  'Rectangle'
);

const gc = new Sandwich('White', ['Cheese'], 'Grilled Cheese');
const pbj = new Sandwich('Wheat', ['Peanut Butter', 'Raspberry Jam'], 'Peanut Butter & Jelly');

console.log(pbj.describe());

const reuben = new Sandwich(
  'Rye',
  ['Corned Beef', 'Sauerkraut', 'Swiss', 'Russian dressing'],
  'Diagonal'
);
bit.name = 'BLT';

// console.log(serve.call(gc, 'Terry'));
// console.log(serve.apply(pbj, ['Jesse']));

function deliverFood(customer, table) {
  console.log(`Delivering ${this.name} to ${customer} at table ${table}`);
}

// console.log(deliverFood.call(gc, 'Terry', '4'));
// console.log(deliverFood.apply(pbj, ['Jesse', '15']));

function  serve() {
  if (arguments.length > 0) {
    const customers = Array.prototype.slice.call(arguments);

    last = customers.pop();
    console.log(`${this.name} for ${customers.join(', ')} and ${last}. Enjoy!`);
  } else {
    console.log(`${this.name}. Order up!`)
  }
 }

 console.log(serve.call(gc));
 console.log(serve.apply(pbj, ['Terry', 'Tom', 'Tabitha']));
 const salad = {
   ingredients: ['Croutons',
     'Romaine Hearts',
     'Steak',
     'Parmesan',
     'Caesar Dressing'],
     name: 'Steak Caesar'
 };

 console.log(pbj.describe.call(salad));

 salad.describe = pbj.describe.bind(salad);
console.log(salad.describe());

function visitTable() {
  console.log(
    `The server is visiting ${this.name} at table number ${this.tableNUmber}.`
  );
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

const sally = new Customer('Sally', '4');

const visitSally = visitTable.bind(sally);

setTimeout(visitSally, 1000);
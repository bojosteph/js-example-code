// const power = function(base, exponent) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(power(2, 10));

const halve = function(n) {
  return n/2;
}

let n = 10;
console.log(halve(100));

console.log(n);
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

console.log(hummus(2))

const power = (base, exponent) => {let result = 1;
for(let count = 0; count < exponent; count++){
  result *= base;
  }
  return result;
}

console.log(power(2, 10));

const square1 = (x) => {return x * x};
const square2 = x => x * x;

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(4);
console.log(twice(5));

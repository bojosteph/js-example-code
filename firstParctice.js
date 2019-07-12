const callback = function (el, i, arr) {
  console.log('The current element is', el);
  console.log('The index of the  current element is', i);
  console.log('The current array is', arr);
  console.log('--------------------');
}

let x = ['Red', 'Yellow', 'Blue'].forEach(callback);

console.log(x);

const myForEach = function (arr, cb) {
  for (const el of arr) {
    let y =  cb(el, arr.indexOf(el), arr);
  }
 };

let y = myForEach(['Red2', 'Yellow2', 'Blue2'], callback);
console.log(y);

const guestlist = ['Kate', 'Jonas', 'Lisa', 'jan', 'kaitlin'];
guestlist.sort(function(a, b) {
  return a.localeCompare(b);
});
console.log(guestlist);

const primes = [13, 7, 17, 2, 5, 3];

const numberSorter = function (num1, num2) {
  return num1 - num2;
}

 let sem = primes.sort(numberSorter);

 console.log(sem);

 const products = [
   {name: 'Head & Shoulders Shampoo', price:4.99 },
   { name: 'Twinkies', price: 7.99 },
   { name: 'Oreos', price: 6.49 },
   { name: 'Jasmine-scented bath pearls', price: 13.99 }
 ];

 const getTotalAmountForProducts = function (products) {
   let totalPrice = 0;

   products.forEach(function (product){
     totalPrice += product.price;
   });
   return  totalPrice;
 };

//  console.log(getTotalAmountForProducts(products))

 const gatherProductNames = function (products) {
   const names = [];

   products.forEach(function (product) {
     names.push(product.name);
   });

   return names;
 };

//  gatherProductNames(products);

 const reduceProductNames = function (agg, el, i, arr) {
   console.log('The aggregate up to this point is:', agg);
   console.log("The current element's name is:", el.name);
   console.log('The index of the current element is:', i);
   console.log('--------------');

   return [...agg, el.name];
 };

 console.log(products.reduce(reduceProductNames, []));

 const reduceProductPrices = function (agg, el, i, arr) {
   console.log('The aggregate up to this point is:', agg);
   console.log('The index of the current element is:', i);
   console.log("The current element's price is:", el.price);
   console.log('----------------');

   return agg + el.price;
 };

 console.log(products.reduce(reduceProductPrices, 0));

 const stringify = function (agg, el, i, arr) {
   let stringifiedElement = el.name + 'is $' + el.price + '. ';

   if (i === arr.length - 1) {
     stringifiedElement += 'The total price is $' + (agg.totalPrice + el.price) + '. ';
     return agg.string + stringifiedElement;
   }

   return {
     string: agg.string + stringifiedElement,
     totalPrice: agg.totalPrice + el.price
   };
 };

 console.log(products.reduce(stringify, {string: '', totalPrice: 0}));


 const newTaxFunction = function (countryName, taxRate, ...exemptItems) {
   return function (item, priceInCents) {
     const formattedPrice = '$' + (priceInCents / 100).toFixed(2);
     const exempt = exemptItems.indexOf(item) > -1;
     const taxDue = exempt ? 0 : priceInCents * taxRate / 100;
     const formattedTaxDue = '$' + taxDue.toFixed(2);

     console.log(`In ${countryName}, ${item} costs ${formattedPrice}.`);
     console.log('That item', exempt ? 'is' : 'is not', 'exempt from taxation.');
     console.log(`The total tax due is: ${formattedTaxDue}.`);
   };
 };
const franceTax = newTaxFunction('France', 0.15, 'wine', 'macaron', 'baguette', 'croissant');

const canadaTax = newTaxFunction('Canada', 0.125, 'maple syrup', 'poutine', 'kindness');
const mexicoTax = newTaxFunction('Mexico', 0.05, 'queso', 'futbol', 'tequila', 'avocado');

console.log(canadaTax('poutine', 599));
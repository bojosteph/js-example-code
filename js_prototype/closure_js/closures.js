// let ItemId = 0;

// class Item {
//   constructor(name, manufacturePrice) {
//     this.name = name;
//     this.manufacturePrice = manufacturePrice;
//     this.id = ++ItemId;

//   }

//   retailPrice(marketMultiplier) {
//     return marketMultiplier * this.manufacturePrice;
//   }
// }

// let tennisShoe = new Item('tennis shoe', 30);
// tennisShoe.manufacturePrice = 4;

// console.log(tennisShoe.retailPrice(2))

// function retailPriceMaker(manufacturePrice) {
//   return function(marketMultiplier) {
//     return marketMultiplier * manufacturePrice;
//   };
// }

// const retailPriceForTen = retailPriceMaker(9);

// console.log(retailPriceForTen(3));

function createItem() {
  let ItemId= 0;

  return class {
    constructor(name, manufacturePrice) {
      this.name = name,
      this.manufacturePrice = manufacturePrice;
      this.id = ++ItemId;
    }
    retailPrice(marketMultiplier) {
      return marketMultiplier * this.manufacturePrice;
    }
  };
}

const Item = createItem();

let tennisShoe = new Item("tennis shoe", 15);

console.log(tennisShoe)
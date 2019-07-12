
const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers (numbers) {

  console.log('Winning numbers: ', numbers);
}

logWinningNumbers(winningNumbers);

console.log(winningNumbers[5])


const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 console.log(alphabet.length)

 console.log(alphabet[alphabet.length - 1])

 const superheroes = ['Catwoman', 'She-hulk', 'Jessica jones', 'scarlet witch', 'gamora'];

 superheroes.push('Wonder Woman');

 superheroes.unshift('Wasp');



 const allSuperheroes = ['Justice League', ...superheroes];

 const allBaby = [...superheroes, 'Boss baby'];

  const copyOfSuperheroes = superheroes.splice(1, 0, 'Ace of nuts', 'poppers not ');

  const copy = superheroes[3] = "Wrong";

  const newSim = [...superheroes.slice(0, 1), 'Veggie Burger', 'House Salad', 'Teriyaki Tofu', ...superheroes.slice(3)];

 
 const menu = ['Jalapeno Poppers', 'Cheeseburger', 'Fish and Chips', 'French Fries', 'Onion Rings'];
 const newMenu = [...menu.slice(0, 1), 'Veggie Burger', 'House Salad', 'Teriyaki Tofu', ...menu.slice(3)];

 console.log(menu);

 console.log(newMenu);
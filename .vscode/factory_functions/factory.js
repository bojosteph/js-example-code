const personFactory = (name, age) => {
  const sayHello = () => console.log('hello');
  return { name, age, sayHello};
}

const jeff = personFactory('jeff', 27);

console.log(jeff.name);

jeff.sayHello();

const name = "Maynard"
const color = "red"
const number = 34
const food = "rice"

console.log({name, color, number, food})

let a = 17;

const func = x => {
  let a = x;
  return a;
};

console.log(func(99));

a = func(99);
console.log(a);

const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`-----${capitalizeString()}-----`);
  return {printString};
}

const taco = FactoryFunction('taco');

taco.printString();


const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

counter();
counter();
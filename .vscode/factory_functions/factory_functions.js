const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {

  };
  const damage = x => {
    health -= x;
    if(health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level <= enemy.getLevel()){
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return{attack, damage, getLevel, getName}
};

const jimmie = Player("jim", 10)
const badGuy = Player("jeff", 5)

jimmie.attack(badGuy)

const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`)
  return {sayName}
}

const Nerd = (name) => {
  const prototype = Person(name)
  const doSomethingNerdy = () => console.log('nerd stuff')
  return Object.assign({}, prototype,{doSomethingNerdy})
}

const jeff = Nerd('jeff')
jeff.sayName()
jeff.doSomethingNerdy()


class Greeter {
  constructor (name) {
    this.name = name || 'John Doe';
  }
  hello () {
    return `Hello, my name is ${this.name}`;
  }
}

const proto = {
  hello () {
    return ` Hello, my name is ${ this.name}`;
  }
};

const greeter = (name) => Object.assign(Object.create(proto), {
  name
});

const george = Object.assign( {}, proto, {name: 'George'});

const msg = george.hello();
console.log(msg);



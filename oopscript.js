class  Character {
  constructor(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  
}
  attack() {
    return 'attack with ' + this.weapon
  }

}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type
  }

}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return 'strongest fort in the world'
  }
}

class Queen extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type
  }
  attack() {
    console.log(super.attack())
    return 'I am the Victoria of hearts, now bow down to me! '
  }
}




const dolby = new Elf('Dolby', 'cloth', 'house');
dolby
const shrek = new Ogre('Shrek', 'club', 'green');

const victoria = new Queen('Victoria', 'army', 'hearts')
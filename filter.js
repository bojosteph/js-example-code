const users = [{
    firstName: 'Niky',
    lastName: 'Morgan',
    favoriteColor: 'Blue',
    favoriteAnimal: 'Jaguar'
  },
  {
    firstName: 'Tracy',
    lastName: 'Lum',
    favoriteColor: 'Yellow',
    favoriteAnimal: 'Penguin'
  },
  {
    firstName: 'Josh',
    lastName: 'Rowley',
    favoriteColor: 'Blue',
    favoriteAnimal: 'Penguin'
  },
  {
    firstName: 'Kate',
    lastName: 'Travers',
    favoriteColor: 'Red',
    favoriteAnimal: 'Jaguar'
  },
  {
    firstName: 'Avidor',
    lastName: 'Turkewitz',
    favoriteColor: 'Blue',
    favoriteAnimal: 'Penguin'
  },
  {
    firstName: 'Drew',
    lastName: 'Price',
    favoriteColor: 'Yellow',
    favoriteAnimal: 'Elephant'
  }
];


function filter (collection, attribute, value) {
  for (const user of collection) {
    if (user[attribute] === value) {
      console.log(user.firstName);
    }
  }
}

console.log(filter(users, 'favoriteAnimal', 'Jaguar'));

function filters (collection) {
  for (const user of collection) {
    if (likesElephants(user)) {
      console.log(user.firstName);
    }
  }
}

function likesElephants (user) {
  return user['favoriteAnimal'] === 'Elephant';
}

console.log(filters(users));

function iInvokeThings (thing) {
  return thing();
}

console.log(iInvokeThings(function () {
  return 4 + 5;
}))
function main(cb) {
  console.log(cb());
}

console.log(
  main(function () {
    return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"
  }));

  function greet (name, cb) {
    return cb(name);
  }

  console.log(greet('Ada Lovelace', function (name) {return 'Hello there, ' + name; }));

  function doMath (num1, num2, cb) {
    return cb(num1, num2);
  }

  console.log(doMath(42,8, function(num1, num2) { return num1 * num2;}));



// function filter(collection, cb) {
//      const newCollection = [];
//   for (const user of collection) {
//     if (cb(user)) {
//       newCollection.push(user);
//     }
//   }
//   return newCollection;
// }

const bluePenguinUsers = filter(users, function (user) {
  return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin';
});

function randomMultiplyAndFloor () {
  return Math.floor(Math.random() * 100);
}

console.log(randomMultiplyAndFloor());


function multiplyAndFloor(num) {
  return Math.floor(num * 100);
}

const randNum = Math.random();

console.log(multiplyAndFloor(randNum));

const adaAge202 = {
  name: 'Ada Lovelace',
  age: 202
};

function happyBirthday(person) {
  const newPerson = Object.assign({}, person, {age: person.age + 1});

  console.log(`Happy Birthday, ${newPerson.name}! You're ${newPerson.age} years old!`);

  return newPerson;
}

const adaAge203 = happyBirthday(adaAge202);
console.log(adaAge203);

let num = [1, 2, 3, 4, 5].filter(function (num) {
  return num > 3;
});

console.log(num);

let friend = users.filter(function (user) { return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin';});
console.log(friend);
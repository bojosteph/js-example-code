const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'b'];

myNumber[3] = 'Wonka';



const newNum = [myNumber.slice(0, 1), 'Roomba', myNumber.slice(2)];

console.log(myNumber);
console.log(newNum);

const eglArray = ['How', ['deep', ['can', ['we', ['go', ['?'], 'Pretty'], 'dang'], 'deep,'], 'it'], 'seems.'];

const desArray = eglArray[1][1];

console.log(desArray);

const board = [
  ['x', 'O', ''],
  [' ', 'X', 'O'],
  ['X', ' ', 'O']
];

console.log(board[1][2]);

const address = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: 10004
};

console.log(address['city'])

const wildKeys = {
  'Cash rules everything around me.': 'Wu',
  'C.R.E.A.M.': 'Tang',
  'Get the money.': 'For',
  "$ $ bill, y'all!": 'Ever'
};

console.log(wildKeys['Get the money.'])
console.log(address['zip' + 'Code'])

const meals = {
  breakfast: 'Oatmeal',
  lunch: 'Caesar salad',
  dinner: 'Chimichangas'
};

let mealName = 'lunch'
console.log(meals[mealName])

const morningMeal = 'breakfast';
const middayMeal = 'lunch';
const eveningMeal = 'dinner';

const meals1 = {
  morningMeal: 'French Toast',
  middayMeal: 'Pw',
  eveningMeal: 'Fish and chips'
};

console.log(meals1)

const circle = {};
circle.radius = 5;

circle['diameter'] = 10;

circle.circumference = circle.diameter * Math.PI;

circle['area'] = Math.PI * circle.radius ** 2;

console.log(circle);

const meals2 = {
  breakfast: 'Avocado toast',
  lunch: 'Avocado toast',
  dinner: 'Avocado toast'
};

meals2.lunch = 'Sushi';

console.log(meals2)

function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value;

  return obj;
}

const mondayMenu = {
  cheesePlate: {
    soft: 'Chevere',
    semisoft: 'Gruyere',
    hard: 'Manchego'
  },
  fries: 'Sweet potato',
  salad: 'Cobb'
};

const tuesdayMenu = destructivelyUpdateObject(mondayMenu, 'salad', 'Caesar');

console.log(tuesdayMenu.salad);
console.log(mondayMenu.salad);

function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = {...obj };

  newObj[key] = value;

  return newObj;
}

const sundayMenu = nondestructivelyUpdateObject(tuesdayMenu, 'fries', 'Shoeestring');

console.log(sundayMenu.fries)


 const newMenu = Object.assign({}, tuesdayMenu, {['chocolate']:'1 cup'});

console.log(newMenu);

function nondestructivelyUpdateObjectAssist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}


function createNewMenu (oldMenu, menuChanges) {
  return Object.assign({}, oldMenu, menuChanges);
}

const newOfferings = {
  cheesePlate: {
    soft: 'Brie',
    semiSoft: 'Fontina',
    
  },
  salad: 'Southwestern'
};

const wednesdayMenu = createNewMenu(tuesdayMenu, newOfferings);

delete wednesdayMenu.salad;

console.log(wednesdayMenu);


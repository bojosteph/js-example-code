let x = [1,2,3].map(function(num) {
  return num * num;
});

console.log(x)

function map(array, callback) {

  const newArr = [];
  for (const element of array) {
      newArr.push(callback(element));
  }
  return newArr;
}

map[1,2,3], function(num) {
  console.log(num * num);
}

const originalNumbers = [1,2,3,4,5];
const squaredNumbers = map(originalNumbers, function(num) {
  return num * num;
});

console.log(squaredNumbers);


const oldAccounts = [
    { userID: 15, title: 'Developer Apprentice', accessLevel: 'user' },
    { userID: 63, title: 'Developer Apprentice', accessLevel: 'user' },
    { userID: 97, title: 'Developer Apprentice', accessLevel: 'user' },
    { userID: 12, title: 'Developer Apprentice', accessLevel: 'user' },
    { userID: 44, title: 'Developer Apprentice', accessLevel: 'user' }
];

const newEngineers = map(oldAccounts, function(account){
  return Object.assign({}, account, {accessLevel: 'admin'});
});

console.log(newEngineers);

const userIDs = map(newEngineers, function(eng){
  return eng.userID;
});

console.log(userIDs);

const equippedEngineers = newEngineers.map(function(eng){
  return Object.assign({}, eng, {equipmnet: 'Laptop'});
})

console.log(equippedEngineers);
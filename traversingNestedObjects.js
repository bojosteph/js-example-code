const userInfo = {
  firstName: 'Roberto',
  lastName: 'Samia',
  company: {
    name: 'Purple Yum',
    jobTitle: 'C.E.O'
  },
  friends: [{
    firstName: 'Willy',
    lastName: 'Wonka',
    company: {
      name: 'Candy Factory',
      jobTitle: 'Candy Wizard'
    }
  }, 
  {
    firstName: 'Billy',
    lastName: 'Boy',
    company: {
      name: 'Boy Toy',
      jobTitle: 'Model'
    }
  }],

  projects: [{
    title: 'Shopify',
    description: 'Cookie shopping website'
  },
{
    title: 'Uprint Me',
    description: 'DTG shirt design'
}]
};

//console.log(userInfo.friends[0].company.name):

const letters = ['a', ['b', ['c', ['d', ['e']], 'f']]];
//const letters =   ['a', ['b', ['c', ['d', ['e']], 'f']]];
console.log(letters[1][1][1][1][0]); 

function shallowIterator(target) {
  for (const key in target){
    if(typeof target[key] === 'object') {
      for (const nestedKey in target[key]) {
        console.log(target[key][nestedKey]);
      }
    } else {
    
      console.log(target[key]);
    }
  }
}
shallowIterator(userInfo);

const primes = [2, 3, 5, 7, 11];
shallowIterator(primes);

const numbers = [1, [2, [4, [5, [6]], 3]]];

shallowIterator(numbers);
let counter = 0;

function deepIterator (target) {
  counter++;
  if (typeof target === 'object') {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}

deepIterator(numbers);
//deepIterator(userInfo);

console.log(counter);
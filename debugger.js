function shallowIterator (target) {
  debugger;

  for (const key in target) {
    debugger;
    console.log(target[key]);
  }
}

const primes = [2,3,4,5,7,11];

shallowIterator(primes);
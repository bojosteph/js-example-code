const hof = () => () => 5;
const curried = (a) => (b) => a*b;
const closure = function() {
  let count = 0;
  return function increment() {
    count++
    return count;
  }
}

const increment = closure();

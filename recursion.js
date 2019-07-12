function power(base, exponent) {
  if (exponent == 0) {
    return 1;}
    else {
      return base * power(base, exponent - 1);
    }
  }

  console.log(power(2,3));

  function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;}
        else {
          return find(current + 5, `(${history} + 5)`) ||
                 find(current * 3, `(${history} * 3)`);
        }
      }
      return find(1, "1");
    }
console.log(findSolution(24));

function zeroPad(number, width) {
  let string = String(number);
  while(string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chicken, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chicken, 3)} Chickens`)
  console.log(`${zeroPad(pigs, 3)} Pigs`)
}

printFarmInventory(7, 16, 3);

function min(a , b) {
  return Math.min(a, b)
}

console.log(min(0, 10));

function isEven(num) {
  if (num === 0) {
    return(true);
  } else if (num === 1) {
    return (false);
  }
  else if (num < 0) {
    return isEven(-num);
  }
    else {
      return(isEven(num - 2));
    }
}

console.log(isEven(-1))

function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'B')
        count += 1;
  }
  return count;
}

function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char)
    count += 1;
  }
  return count;
}

console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "k"))
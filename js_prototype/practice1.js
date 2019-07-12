

for (var str = "#"; str.length < 8; str += "#") {
  console.log(str);
}

for (i = 1; i < 101; i++) {
  if (i % 15 === 0) console.log("Fizz Buzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

var board = "";

for (i = 0; i < 8; i++) {
  for(j = 0; j < 8 ; j++) {
    if ((i + j) % 2 === 0) 
      board += " ";
    else 
      board += '#';
  }
  board += "\n"
}

console.log(board);

function min(a, b) {
  return Math.min(a, b);
}
console.log(min(0, 10));

function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2)
  }
}

console.log(isEven(75));


function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

function countBs(str) {
  return countChar(str, 'B');
}

console.log(countBs("BBC"));
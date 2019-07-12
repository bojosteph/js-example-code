let board = "";
let size = 8;

for (var x = 0; x < size; x++) {
  for(var y = 0; y < size; y++) {
    if ((x + y) % 2 === 0)
    board += " ";
    else
    board += "#";
  }
  board += "\n";
}

console.log(board);

const min = (a, b) => {
  return Math.min(a, b)
}
console.log(min(0, -10))

const isEven = (num) => {
  if (num === 0)
  return true;
  if (num === 1)
  return false;
  if (num < 0)
  return (isEven(-num));
  else 
  return(isEven(num -2));
}
    
console.log(isEven(-1));
console.log(isEven(22));

const countChar = (str, char) => {
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char)
    count++
  }
  return count;
}

const countBs = (str) => {
  return countChar(str, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
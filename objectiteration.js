let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let j = 0;
while(j < myArray.length){
  console.log(myArray[j++]);
}

for (const element of myArray) {
  console.log(element);
}

for (const char of 'Hello, World!') {
  console.log(char);
}

const address = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: 10004
};

for (const key in address) {
  console.log(address[key]);
}
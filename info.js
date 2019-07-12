let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;
let isGreater = 4 > 1

console.log(isGreater)
let value = true;
value = String(value);
num = undefined + 1;
console.log(num);
 if (!(age >= 14 && age <= 90));

 let login = prompt("Who's There");
 let message;
 
 if (login === 'Admin') {
  let password = prompt("Password?");
  if (password === 'Master') {
    message = 'Welcome!'; }
    else if (password == "" || password == null) {
    message = 'Canceled'}
    else  {
    message = 'Wrong Password'
    }
    }
    
  else if (login == '' || login == null) {
    message = 'Cancelled'
  }

  else {
    message = 'I dont know you '
  }
 
/*
RECAP
*/
let stringExample = 'string';
let numberExample = 0;
let boolExample = true;

let conditionExample = 0;

//if else example
if (typeof conditionExample === 'string'){
  console.log('yep, it\'s a string');
} else if (typeof conditionExample === 'number'){
  console.log("yep, it's a number");
} else if (typeof conditionExample === 'boolean'){
  console.log("yep, it's a boolean!");
}

console.log(typeof conditionExample);
//switch
switch (typeof conditionExample) {
  case 'string':
    console.log('this is a string!');
    break;
  case 'number':
    console.log('this is a number!');
    break;
  default:
    console.log('this variable is not a string or number');
    break;
}

// let x = 0;

// switch (x) {
//   case (x < 10 && x > -10):
//     console.log('this is a small number');
//     break;
//   default:
//     console.log('this is some other number');
//     break;
// }

//ternary below
(typeof conditionExample === 'string') ? console.log('our variable is a string')
  : (typeof conditionExample === 'number') ? console.log('our var is a number')
  : (typeof conditionExample === 'undefined') ? console.log('our var is undef')
  : console.log('this is our default case');

/**************************
WHITEBOARD 1 - FIZZ BUZZ (Conditionals Only)
**************************/
/*
Challenge:
Create a variable named FB that takes numbers
Write a conditional that: 
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/


let FB = 15;

if (FB % 3 === 0 && FB % 5 === 0){
    console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
    console.log('Buzz');
} else if (FB % 3 === 0) { 
console.log('Fizz')
}


switch (true){
    case (FB % 15 === 0):
    console.log('Fizz Buzz');
    break; 
    case (FB % 5 === 0):
    console.log('Buzz');
    break;
    case (FB % 3 === 0):
    console.log('Fizz');
    break;
}

let FB = 15;

(FB % 15 === 0) ? console.log('Fizz Buzz')
: (FB % 5 === 0) ? console.log('Buzz')
: (FB % 3 === 0) ? console.log('Fizz')
: console.log('Your num is not divisible by 3 or 5'); 
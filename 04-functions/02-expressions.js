/*
EXPRESSIONS
*/


console.log(typeof hi); //EXPECTED to output as a function. The output was UNDEFINED because 'hi' was not yet defined 
var hi = function hi() {
    console.log('hello');
}

hi(); // Output --> 'hello'


/*
HOISTING looks at the beginning of every line of code and effectively brings declarations to the top of the process. 
*/

console.log(scissors); //undefined because VAR SCISSORS was HOISTED, but 'blue' was not.
var scissors = 'blue'; 

console.log(scissors); //--> blue is the result because scissors is defined in the order of the process.

function hello() {
    console.log('hoisting is... interesting'); 
}

hello(); //--> output is 'hoisting is... interesting' because the function is declared below and is being hoisted above
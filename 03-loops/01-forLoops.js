/*
CLASSIC FOR LOOPS
*/

//Loop Variations
//For statement
//Do while statements
//while statement
//labeled statement
//break statement
//continue statement
//for in statement 
//for of statement

for (let i = 0; i < 10; i++) {
    console.log(i);  //counted from 0 - 9 by 1's
} 

//count from 0 - 20 by 2's

for(let i = 0; i <= 20; i += 2) {
console.log(i); 
}

for(let i = 10; i >= 0; i -= 1) {
    console.log(i); 
}

// CHALLENGE 

let nameString = "Cody";

for (let name of nameString) {
    console.log(name);
}

let name = 'Cody';

for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}

// CHALLENGE 

let sum = 0

for (let x = 1; x <= 50; x++){
    console.log(sum);
    sum = sum + 1;
}
console.log(sum); 

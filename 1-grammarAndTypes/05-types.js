/*
TYPES 
*/

//Booleans
let on = true;
console.log(on);  //output --> true 

let off = false
console.log(off);  //output --> false 

// boolean can represent: true/fals, on/off, yes/no 

//Null 
/*
NULL is an empty value (not 0); not undefined
    NULL is like an empty container, it exists but does not contain anything and has space to fill
*/

let empty = null;
console.log(empty); 

//Undefined

/*
UNDEFINED has no value assigned (not even an empty container)

UNDEFINED is not an error
*/

let undef = undefined;
console.log(undef); 

let grass;
console.log(grass);

/* Think of undefined and null as packages in a UPS store
null --> package deliberately sent out as empty
undefined --> package that has not yet been used or given a purpose
*/ 

//NUMBERS
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let anotherNumber = 0.2 + 0.1
console.log(anotherNumber);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10; 
console.log(numbersAreHard);


//Strings
//STRINGS are any value within quotes; JS will spit out the value within the quotes

let stringOne = "double quotes"
let stringTwo = "single quotes"
console.log(stringOne, stringTwo);

//Numbers vs Strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); //NUMBER
console.log(second); //STRING

console.log(typeof first); //NUMBER
console.log(typeof second); //STRING

// + --> addition when given 2 numbers, concatentation when given 2 strings 

let third = 1050 + '100';
console.log(third); 


//Challenge: 

let firstName = 'Cody';
let lastName = 'Jones';
let houseNumber = 7016;
let street = 'Forrester Lane';
let city = 'Indianapolis'; 
let state = 'Indiana';
let zipcode = '46217'; 

console.log(firstName, lastName, + houseNumber, street, city, state, + zipcode); 


//OBJECTS
/*
What is an object?

    An OBJECT is a container that can hold multiple data types.
    An OBJECT is denoted by the {} symbols and has keys and values
        KEYS are separated by a comma
        VALUES are separated by a colon
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true 
}

console.log(burritosNow);
console.log(typeof burritosNow);

//ARRAYS 
/*
ARRAYS are great for lists 

ARRAYS are denoted by []
ARRAYS have values separarted by commas --> ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true]
console.log(burritos); 
console.log(typeof burritos);
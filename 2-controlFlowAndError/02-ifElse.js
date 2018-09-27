/*
IF ELSE 
*/

weather = 75;

if (weather < 70) {
    console.log('Wear a Jacket');
} else {
    console.log('No Jacket Necessary'); // When the IF output is FALSE, the ELSE will give an output 
}

//CHALLENGE TIME 

name = 'Cody Jones';

if (name == 'Cody Jones'){
    console.log('Hello, my name is Cody Jones');
} else {
    console.log('Hello, what is your name?');
}

/*
Challenge:
Capitalize the FIRST LETTER of name ONLY
*/

function name (string){
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

console.log(name('cody'));



let name = 'cOdY';

if (name [0] == name[0]. toUpperCase()) {
    firstLetter = name [0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters); 
}


age = 20; 
if (age <= 17) {
    console.log('Sorry, you are too young to do anything.');
} else if (age <= 18){
    console.log('Yay! you can Vote!')
} else if (age >18 && age < 21) {
    console.log('yay! You can Drink!')
} else if (age <= 21 && age < 25) {
    console.log('Yay! You can rent a Car!')
}


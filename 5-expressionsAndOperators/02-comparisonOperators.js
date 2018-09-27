/*
COMPARISON OPERATORS
*/

//Equality 
console.log('3' == 3); //TRUE despite one being a word and the other a number because the VALUE is the same
console.log('three' == 3); //FALSE because 3 written out as 'three' is not equal to the number 3
console.log(0 == false);

//Strict Equality
console.log(3 === 3); //Strict Equality checks VALUE and TYPE 
console.log(3 === '3'); //FALSE because the VALUE is the same but the TYPE is not

//Not Equal
console.log('3' != 4); //Does NOT care about type so output --> false 

//Strict Not Equal
console.log('3' !== 3); //--> DOES care about value and type so output is TRUE because '3' and 3 are NOT equal

//Greater Than
console.log(3 > 2);

//Less Than
console.log(2 < 3);

//Greater than or Equal to
console.log(3 >= 3);

//Less than or Equal to
console.log(4 <= 4);

//And -- Returns TRUE if the left and right are both TRUE 
console.log(true && true); //output is true because both right and left are true

let x = 5;
console.log(x < 10 && x > -5); // True
console.log(x< 10 && x > 15); // False

//Tangent
let str = 'a';
console.log(str < 'p'); //A is number 1 in the alphabet, P is number 16 in the alphabet. Therefore A is LESS THAN P

//Or: Output is TRUE if left OR right value is true
console.log(true || false); //OR is represented by || or "double pipe"
let x = 5;
console.log(x < 10 || x > 15);
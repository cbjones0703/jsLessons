/*
INTRO TO ARRAYS
*/

// Use [] brackets
// Can hold multiple datatypes 
// Arrays are great for listing 





// overview/calling

let students = ['Tony' , 'Marshall' , 'Rhys' , 'Ray' , 23, true, ['Ryan' , 'Iesha']];

/*console.log(typeof students); //output --> object
console.log(students [2]); //output --> Rhys, because the console.log has selected the third student in the line (computers start counting at 0)*/

console.log(students [6][1]);
console.log(`Hello, ${students [6][1]} you look nice today.`);


let food = ['pecan pie' , 'shrimp' , 'quesadilla' , 'cheese cake' , 'hotdog'];

/*for (let i = 0; i < food.length; i++){
    console.log(food [i])
}

for(let f of food){
    console.log(f); 
}

let cars = ['Mustang' , 'Nova' , 'Civic' , 'Juke'];

for(let c of cars){
console.log(c); 
}*/

food.push('pizza')
food.splice(1, 1, 'bananas') //first number is the index to start at, the second number is number of things to remove, third number is the replacement value 
console.log(food); 
food.splice(2, 0, 'sweet potato pie');//This output did not replace anything in the array because the second number, 0, demonstrates how many objects will be replaced
console.log(food); 

food.pop(); //. pop output removes the last item in the array
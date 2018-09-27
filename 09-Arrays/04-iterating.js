/*
ITERATING 
*/

let food = ['pecan pie' , 'shrimp' , 'quesadilla' , 'cheese cake' , 'hotdog'];

//food.forEach(f => {console.log(f)}); 

food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})


let movies = ['Dan in Real Life' , 'Away We Go' , 'Up' , 'Fox and the Hound' , 'Drive'];

movies.forEach((movie) => {
    console.log(movie)
})

movies.push('New Hope')
movies.splice(1, 1, 'Dunkirk') 
console.log(movies); 


let long = [1 , 2, 3, 4, 5, 6, 7, 8 ,9 ,10];
console.log(long.length); 

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})

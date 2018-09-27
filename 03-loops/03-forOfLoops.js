/* 
FOR OF LOOPS

BETTER FOR ARRAYS
*/

let student = {name: 'Emily' , awesome: true , degree: 'JavaScript' , week: 1};
for (let key of student){
    console.log(key); 
}

let catArray = ['Tabby' , 'British Shorthar' , 'Burmese' , 'Main coon'];

for (cat of catArray) {
    console.log(cat, 'says meow');
}
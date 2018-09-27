/* 
SWITCH
*/

let friend = 'Alecx'

switch (friend) {
    case 'Tom':
        console.log('Hey Tom, when are you rock climbing?');
        break;
    case 'Kenn':
        console.log('Hey Kenn, wanna play Catan?');
        break;
    case 'Carolyn':
        console.log('Hey Carolyn, why you leaving us?');
        break;
    default: 
        console.log(`I'm sorry, ${friend}, but do I know you?`); // SWITCH allows for the use of the $ sign to insert variables and declarations
}

//CHALLENGE TIME 

let dessert = 'pie'

switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default: 
        console.log(`I'm sorry, ${dessert}, is not on the menu.`);
}


let yep = -8;

switch (true){
    case (yep < 0 && yep > -10):
    console.log('Worked!');
    break;
    case (yep > 0):
console.log('Worked here!');
break;
default:
console.log('did not work');
}
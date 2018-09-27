/*
SCOPE

JavaScript has both LOCAL and GLOBAL scope
*/

var x = 12;

function scope() {
    var x = 33;
    console.log(x);
}
scope(); //output --> 33
console.log(x); //output --> 12

//
var x = 12

function scope () {
    x = 33;
    console.log(x);
}

scope(); //output --> 33 for each, because there is only one defined local variable (x = 33)
console.log(x);

//the two examples above are different because the first example had 2 variables named X
//the second example had just 1 variable named x in the global scope.

var x = 12;

function scope() {
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); // the guess was that we were going to see 45 here
    }
    console.log(x); // and that we'd see 33 here
}
scope();
console.log(x); // and lastly 12 here

// Instead, we got 45, 45 and 12. This is because VAR will bleed into other {} brackets, affecting the variable. 

//
let x =12;
function scope () {
    let x = 33;  // <--- because we used LET instead of VAR
    if (true) {
        let x = 45; // < --- because we used LET instead of VAR 
        console.log(x);
    }
    console.log(x);
}
scope ();
console.log(x); // LET will not bleed into other brackets because it's much more flexible

//
function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}
constTest();  //<--- output is 2 and then one, the first console.log is run first despite it being deeper in the brackets

/*
    variable declar.   obeys functional scope    obeys block scope   can be mutated (changed after initialization)
    var                 x                         o                   x
    let                 x                         x                   x
    const               x                         x                   o
*/


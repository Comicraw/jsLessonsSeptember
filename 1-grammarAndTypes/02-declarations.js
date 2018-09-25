// // Variables

// var a = 1;
// var b = 2;
// console.log(a + b);

// //Declarations
// var x;

// console.log(x);

// // Initialization
// x = 10;

// console.log(x);

// x = 33;

// console.log(x);

// //3 ways to declare a variable
// var old;
// let newVar;
// const otherNewVar;

// let today = 'great!';
// const elevenFifty = 'Aweseome'

// console.log(today, elevenFifty);

// today = 'lovely';

// console.log(today, elevenFifty);
//------------------------------------------------------------------

/*
VARIABLES

notes on variables:
1) a variable must begin with a letter, underscore, or dollar sign
2) you can use numbers, but they must follow one of the above
3)JavaScript is case sensitive--'hello' and 'Hello' are different
*/
var a = 1;
var b = 2;
console.log(1+2); //3

/*
Declarations

Declarations are the left side of a variable
It is simply the VAR X
It is on th eleft side of teh assignment operator (=)

Initializations are the RIGHT SIDE of a variable
Set the value of the variable
includes the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

var x;
console.log('Declaration:', x);

x = 10;
console.log('Initialization 1:', x)

x = 33
console.log('Initialization 2:', x)

/*
var, let, and const:
var = 'old' js keyword for variables
let = 'new' keyword for variables (introduced in ES6)
const = also 'new'; declares unchangeable variables
*/

let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty);

today = 'lovely!';
console.log(today, elevenFifty)
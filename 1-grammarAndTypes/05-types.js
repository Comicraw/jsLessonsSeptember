// // Types

// //Boolean true or false
// var bool = true;
// console.log(bool);

// let noBool = false;

// console.log(bool, noBool);

// //Null no valus, placeholder to have something fill it in

// var empty = null;
// console.log(empty);

// //Undefined no value has been assigned to it
// var undef = undefined;
// console.log(undef);

// //Numbers
// var degrees = 90;
// console.log(degrees);

// var precise = 9999999999;
// console.log(precise);

// let rounded = 9999999999999999;
// console.log(rounded);

// let notQuite = 0.2 + 0.1;
// console.log(notQuite);

// var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(numbersAreHard);

// //Strings 
// let stringOne = "double quotes";
// let stringTwo = 'single quotes';
// console.log(stringOne, stringTwo);

// let first = 1050 + 100;
// console.log(first);

// let second = '1050' + '100';
// console.log(second);

// console.log(typeof first)
// console.log(typeof second)

// let third = 1050 + '100';
// console.log(third);

// let firstName = "Cory";
// let lastName = "Crawford";
// let houseNumber = 3453;
// let street = "N 900 E";
// let city = "Whitestown";
// let state = "Indiana";
// let zipCode = 46075;

// console.log(firstName, lastName, houseNumber, street, city, state, zipCode);

// //Objects container that holds multiple data types
// let burritosNow = {
//     size: 'large',
//     quantity: 4,
//     now: true
// }

// console.log(burritosNow);

// //Arrays great for listing items [] square brackets
// let burritosLater = ['large', 4, true];

// console.log(burritosLater)
//--------------------------------------------------------------------

/*
TYPES
*/

//Booleans
let on = true;
console.log(on); //output -> true

let off = false;
console.log(off);
//output -> false

//boolean can represent: true/false, on/off, yes/no

/*
Null = empty value(not 0; not undefined)

it is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
Undefined: no value assigned (not even an empty container)
undefined is not an error
*/

let undef = undefined;
console.log(undef);

let grass;
console.log(grass); //undefined

/*
think of undefined and null a packages in UPS
null -> package deliberately sent out from UPS as empty
undefined -> package that was forgoten, or a package that has not yet been used
*/

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

//strings
//strings = any value witin quotes; JS spit out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); //number
console.log(second); //string


let firstName = 'Cory';
let lastName = 'Crawford';
let houseNumber = '3453';
let street = 'N 900 E';
let city = 'Whitestown';
let state = 'IN';
let zipcode = '46075';

console.log(firstName, lastName);
console.log(houseNumber, street)
console.log(city, state, zipcode)

//objects
/*
What is an object?

Container that can hold multiple datatypes

denoted by {}
has keys and values (color (key): 'blue' (value)), separated with a colon
Each key separated with a comma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow);
console.log(typeof burritosNow)

//Arrays
/*
Arrays are great for lists
denoted by []
have values separated by commas -> ['blue', 'green', 'yellow']
*/

let burritosArr = ['large', 4, true];

console.log(burritosArr)
console.log(typeof burritosArr)

/*
HTML
CSS
Comments
Variables
Declarations
Datatypes

*/
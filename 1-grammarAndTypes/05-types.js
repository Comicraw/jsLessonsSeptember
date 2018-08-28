// Types

//Boolean true or false
var bool = true;
console.log(bool);

let noBool = false;

console.log(bool, noBool);

//Null no valus, placeholder to have something fill it in

var empty = null;
console.log(empty);

//Undefined no value has been assigned to it
var undef = undefined;
console.log(undef);

//Numbers
var degrees = 90;
console.log(degrees);

var precise = 9999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings 
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
console.log(first);

let second = '1050' + '100';
console.log(second);

console.log(typeof first)
console.log(typeof second)

let third = 1050 + '100';
console.log(third);

let firstName = "Cory";
let lastName = "Crawford";
let houseNumber = 3453;
let street = "N 900 E";
let city = "Whitestown";
let state = "Indiana";
let zipCode = 46075;

console.log(firstName, lastName, houseNumber, street, city, state, zipCode);

//Objects container that holds multiple data typesx
let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow);

//Arrays great for listing items [] square brackets
let burritosLater = ['large', 4, true];

console.log(burritosLater)
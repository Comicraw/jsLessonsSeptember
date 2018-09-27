//RECAP

//string example

let stringExample = 'string';
let numberExample = 0;
let booleanExample = true;

conditionExample = 0;

//if else example
if (typeof conditionExample === 'string') {
  console.log('yep it\'s a string');
} else if (typeof conditionExample) {
  console.log('yep, it\s a number');
} else if (typeof conditionExample === 'boolean') {
  console.log('yep, it\s a boolean');
}

conditionExample = 0;

switch (typeof conditionExample) {
  case 'string':
    console.log('this is a string')
    break;
  case 'number':
    console.log('this is a number')
    break;
  default: console.log('this variable is not a string or number')
}

//ternary

(typeof conditionExample === 'string') ? console.log('our variable is a string')
 : (typeof conditionExample === 'number') ? console.log('our variable is a number')
 : (typeof conditionExample === 'undefined') ? console.log('our variable is undefined')
 : console.log('this is our default case');
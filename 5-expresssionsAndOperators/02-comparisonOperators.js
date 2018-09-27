// // Equal
// '3' == 3;

// //Strict equal
// 3 === 3;

// // Not equal
// '3' != 4; // '!' in front of something means NOT that

// // Strict not equal
// '3' !== 3;

// // Greater than
// 3 > 2;

// // Less than
// 2 < 3;

// // Greater than or equal to
// 3 >= 2;

// //Less than or equal to
// 2 <= 3;

// // And
// 2 && 3;

// // Or
// 2 || 3;
//-----------------------------------

//Comparison Operators

//equality

console.log('3' == 3) //type coercion true

//strict equality

console.log('3' === 3) //false checks both value and type

//not equal
console.log('4' != 4); //doesnt care about type, output -> false

//strict not equal
console.log('3' !== 3); //output -> true

//greater than
console.log(3 > 2);

//less than
console.log(2 < 3);

//greater than or equal to\
console.log(3 >= 3);

//less than or equal to
console.log(3 <= 3);

//and, returns true if the left and right are both true
console.log(true && true); //output true
let x = 5;
console.log(x < 10 && x > -5); //true
console.log(x < 10 && x > 15); //false

let str = 'a'
console.log(str < 'p')

//or
console.log(true || false); //true
x = 5;
console.log(x < 10 || x > 15); //true
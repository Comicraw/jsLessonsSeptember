// /*
// loops offer a quick and easy way to do something repeatedly. there are many
//  different kinds of loops but they all do roughly the same thing:
//  for statement
//  do while statement
//  while statement
//  labeled statement
//  break statement
//  continue statement
//  for in statement
//  for of statement
// */


// for (let i = 0; i < 10; i++) { 
//     //this order matters
//     console.log(i);
// }

// for (let i = 2; i <= 20; i+=2) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i-=1) {
//     console.log(i)
// }

// for (let i = 0; i >= -24; i-=2) {
//     console.log(i)
// }

// //using a for loop go through a name and display each letter individually

// let str = 'cory';

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// //make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

// let sum = 0;

// for (let i = 0; i <= 50; i++) {
//     sum+=i;
//     console.log(sum);
// }

// let sum = 0;

// for (let i = 0; sum < 1275; i++) {
//     sum+=i;
//     console.log(sum);
// }

//----------------------------------------------------------

/*
CLASSIC FOR LOOPS
*/

//Loop Variations
//For statement **
//Do while statement
//While Statment
//Labeled Statement
//Break Statement
//Continue Statement
//For In Statement **
//For Of Statement **

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//count from 0 - 20 by 2's

for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}

for (let i = 10; i >= 0; i -= 1) {
    console.log(i)
}

let name = 'Cory'

for (i = 0; i < name.length; i++) {
    console.log(name[i])
}

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum = sum + i
}
console.log(sum)
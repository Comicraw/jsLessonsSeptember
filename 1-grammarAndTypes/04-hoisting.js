console.log(scissors)
var scissors = "pink scissors"j

console.log(cats)
let cats = "the best"
//let doesnt hoist the variable up and give an undefined

console.log(dogs)
const dogs = "pretty good"

/*
let and const do not get hoisted = you can only use 
them after you declare them. 
This is a good thing for intentional programming
*/

hiTom()
//function
function hiTom(){
    console.log("hi tom")
}
tom()
//function expression
let tom = function hi(){
    console.log("hiii tom")
}
/*
Functions are hoisted, and can be used before they are declated.
Function expressions can only be uses after they are declared, they are not hoisted.

Remember JSreads the let side (declaration) first,
then the right side. Regular funcitons only have a left
side, expressions have both.
*/

/*
var monster  =  "creepy"
LEFT SIDE       RIGHT SIDE
DECLARATION     ASSIGNMENT
JS reads left side first then right side
and only looks for "var and function" the first time through
 */
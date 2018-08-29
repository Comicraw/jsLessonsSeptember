// If Else Statements

let weather = 90;

if (weather < 80 && weather > 40) {
    console.log('go outside')
} else {
    console.log('stay inside')
}

let myName = 'Cory';

if (myName == 'Cory') {
    // vvv These all read the same vvv
    console.log(`Hello my name is ${myName}.`)
    // console.log('Hello my name is ' + myName + '.')
    // console.log('Hello my anme is', nymane + '.')
} else {
    console.log('Hello, what is your name?')
}

//cap first letter of name
let name = 'carOLyn';

let capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize(name));

let name = 'carOLyn';

if (name[0] == name[0].toUpperCase()) {
    let firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter)
} else {
    let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters)
}

//Else If Statements

let coffee = 'hot';

if (coffee == 'hot') {
    console.log('do something')
} else if (coffee == 'luke warm') {
    console.log('do something else')
} else {
    console.log('do something else again')
}

let age = 25;

if (age <= 17) {
    console.log ("Sorry you're too young to do anything")
} else if (age >= 18) {
    console.log('Yay! You can vote!')
} else if(age >= 21) {
    console.log('Yay! You can drink!')
} else (age >= 25); {
    console.log('Yay! You can rent a car!')
}

let age = 30;

if (age >= 25) {
    console.log('You can rent a car')
} else if (age >= 21) {
    console.log( 'You can drink')
} else if (age >= 18) {
    console.log('You can vote')
} else {
    console.log("You can't do anything")
} 
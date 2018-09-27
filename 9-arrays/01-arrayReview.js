// //arrays

// let arr = [];
// console.log(typeof arr)
// //gives us object, def of objeft is container that
// //contains multiple data types

// //^^^challenge go into the nested array and get 'Amira' print out 
// //"hello amira, you look nice today"

// let students = [23, true, false, 'Evan', 'Parker', ['Amira', 'Mohamed']]
// console.log('Hello', students[5][0] + ', you look nice today')

// //another way to do it
// let students = [23, true, false, 'Evan', 'Parker', ['Amira', 'Mohamed']]
// let names = students[5][0]
// console.log(`Hello ${names}, you look nice today`)

// //how to check if the item is an Array
// console.log(students instanceof Array)


// let students = [23, true, false, 'Evan', 'Parker', ['Amira', 'Mohamed']]
// console.log('Hello', students[5][0] + ', you look nice today')

// //check if it is BOTH typeof object and an array
// let students = [23, true, false, 'Evan', 'Parker', ['Amira', 'Mohamed']]
// if (students instanceof Array === true && typeof students === 'object') {
//     let names = students[5][0]
//     console.log(`Hello ${names}, you look nice today`)
// }

// //ternary
// // "?" basically is your "{" and ":" is your else
// (students instanceof Array === true && typeof students === 'object') ? console.log(`Hello ${students[5][0]}, you look nice today`) : console.log('didn\'t work')

let foodArray = ['pizza', 'tacos', 'ramen', 'fillet', 'brussel sprouts']

for (let food in foodArray) {
    console.log(foodArray[food])
}

// //for of loops will give you the value and for in loops will give you the index number

// //methods

// let foodArray = ['pizza', 'tacos', 'bbq', 'ramen', 'fillet', 'brussel sprouts']

// //.push only puts the item at the end of the array pizza tacos ramen fillet brusselsprouts
// foodArray.push('cheesecake')
// //pizza tacos ramen fillet brusselsprouts cheesecake
// foodArray.splice(3, 1, 'spaghetti', 'chicken') // .splice(position, how many to delete, what to put in)
// //pizza tacos bbq spaghetti chicken fillet brusselsprouts cheesecake
// foodArray.splice(5, 0, 'beer')
// //pizza tacos bbq spaghetti chicken beer fillet brusselsprouts cheesecake
// foodArray.pop(); //pops that last one off (cheesecake)
// //pizza tacos bbq spaghetti chicken beer fillet brusselspouts

// // for (let food in foodArray) {
// //     console.log(foodArray[food])
// // }

// //for each loop
// //vvvv same as the for statment above
// // foodArray.forEach(food => console.log(food))

// foodArray.forEach((value, number) => { console.log(number); console.log(value) })

// /*
// challenge:
// create a list with an array of movies
// use.foreach() to list your movies
// add another movie at the end
// and replace one of your existing movies with another one
// */

// movieArray = ['The Ring', 'Star Wars', 'Gattica']

// movieArray.push('Up')

// movieArray.splice(2, 1, 'Crash')

// movieArray.forEach((value) => { console.log(value) })

// //counting whats in your array
// // .length

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(newArr.length)
// //10

// let colors = ['blue', 'green', 'yellow', 'red', 'gray', 'black']
// // console.log(colors.length)
// //counts how many are in your array
// //6

// console.log(colors.toString())
// //gives values
// //blue,green,yellow,red,gray,black

// let drinks = ['pepsi', 'MD', 'coke', 'sprite']
// console.log(drinks.length)
// console.log(drinks.toString())
// drinks.forEach((value, number) => { console.log(number); console.log(value) })

// /*
// challenge
// first check if you are working with an array
// then flip the values within the array (what was in the index 4 is now in 0, 3 to 1, etc.)
// using a method only, print the values of the newly arranged array
// */
// let arr = [1, 2, 3, 4, 5];
// console.log(arr instanceof Array)
// console.log(arr.reverse())
// arr.forEach((number) => { console.log(number) })

// let arr = new Array(1, 2, 3, 4, 5)
// console.log(arr)

// //challenge

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'brown', 'white'];
// let numbers = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th']

// function newArray(numberArray, colorArray) {

// }

// newArray()
// //wrong

//------------------------------------------------------
/*
INTRO TO ARRAYS

they have [] brackets
can hold multiple datatypes
great for listing
*/

//overview/calling

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']]
//index numbers    0         1         2       3     4   5       6         7

console.log(typeof students);    //objects
console.log(students[2]);   //Rhys

console.log(students[6][1])
console.log(`Hello ${students[6][1]}, you look nice today`)

let food = ['Apple pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

for (let i = 0; i < food.length; i++) {
  console.log(food[i])
}

for (let foodArray of food) {
  console.log(foodArray);
}

food.push('Pizza')  //appends pizza to the end of the array
// console.log(food);
food.splice(1, 1, 'Bananas'); // first number: the index to start at, second num: number of things to remove, third num: what to replace it with
console.log(food);
food.splice(2, 0, 'Sweet Potato Pie')  //doesnt replace anything, just adds Sweet Potato Pie after Bananas
console.log(food);
food.pop(); //removes the last value
console.log(food);
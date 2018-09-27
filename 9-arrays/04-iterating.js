//Iterating

let food = ['Apple pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

// for (foodArray of food) {
//   console.log(foodArray)
// }

// food.forEach(foodArray => {console.log(foodArray)})

food.forEach((food, number) => {
  console.log(food);
  console.log(number);
})

let movies = ['movie1', 'movie2', 'movie3', 'movie4']

// movies.forEach((movies) => {console.log(movies)})
movies.push('movie5')
movies.splice(1, 1, 'bettermovie2')

movies.forEach((movies) => {
  console.log(movies)
})

let newArray = new Array(73)
console.log(newArray.length);

newArray.forEach(element => {
  console.log(element);
})
console.log(newArray)
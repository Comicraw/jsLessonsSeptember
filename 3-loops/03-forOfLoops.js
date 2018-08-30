/*
for of loops
they need 'iterable' properties
*/

let student = {name: 'Peter', awesome: true, degree: 'Javascript', week: 1}

for (key of student) {
    console.log(key);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for (cat of catArray) {
    console.log(cat, 'says meow');
}

for (cat in catArray) {
    console.log(cat);
}

//for of loops will give you the value and for in loops will give you the index number

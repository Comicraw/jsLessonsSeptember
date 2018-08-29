/*
for-in loop 
great for iterating over values in an object
for-in loops work when the properties are 'enumerable'
*/

//use curly brackets for objects/keys
let student = {name: 'Peter', awesome: true, degree: 'Javascript', week: 1}

for (key in student) {
    console.log(key); //prints the keys
    console.log(student[key]); //prints the values of the keys
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']
for (let cat in catArray) {
    console.log(cat);
    console.log(catArray[cat])
}
 
//using for in cap first letter of the name
let studentName = 'cOry';
let capStudentName;

for (let letter in studentName) {
    if (letter == 0) {
        capName = studentName[letter].toUpperCase();
    } else {
        capName += studentName[letter].toLowerCase();
    }
}
console.log(capName)
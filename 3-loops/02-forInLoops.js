/*
for-in loop 
great for iterating over values in an object
for-in loops work when the properties are 'enumerable'
*/

//use curly brackets for objects/keys
let student = { name: 'Peter', awesome: true, degree: 'Javascript', week: 1 }

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

//challenge fizzbuzz 1-100 if divisible by 3 fizz bhy 5 buzz if by both fizz buzz

for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log('fizz buzz')
    } else if (i % 5 == 0) {
        console.log('buzz')
    } else if (i % 3 == 0) {
        console.log('fizz')
    } else {
        console.log(i)
    }
}

for (j = 1; j <= 100; j++) {
    switch (true) {
        case j % 15 === 0:
            console.log('fizz buzz')
            break;
        case j % 5 === 0:
            console.log('buzz')
            break
        case j % 3 === 0:
            console.log('fizz')
            break
        default:
            console.log(j);
    }
}


for (a = 1; a <= 100; a++) {
    console.log((a % 5 === 0 && a % 3 === 0) ? 'fizz buzz' : (a % 5 === 0) ? 'buzz' : (a % 3 === 0) ? 'fizz' : a)
}


let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number in numberArray) {
    if (numberArray[number] % 15 === 0) {
        console.log('fizz buzz')
    } else if (numberArray[number] % 5 === 0) {
        console.log('buzz')
    } else if (numberArray[number] % 3 === 0) {
        console.log('fizz')
    } else {
        console.log(numberArray[number])
    }
}

//for of loops will give you the value and for in loops will give you the index number

// //What is scope?
// //JS has local and global scopes

// var x = 12
// //global x - global scope

// //in order to see the stuff below we have to call back to it
// function scope(){
//     //scope is local to my function
//     var x = 33
//     console.log(x)
// }
// scope()
// console.log(x)

// function varTest(){
//     var scope = 1
//     if (true) {
//         var scope = 2
//         console.log(scope)
//     }
//     console.log(scope)
// }
// vartest()

// //now with let
// function letTest(){
//     let scope = 1
//     if (true) {
//         let scope = 2
//         console.log(scope)
//     }
//     console.log(scope)
// }
// letTest()

// //not with const
// function constTest(){
//     const scope = 1
//     if (true){
//         const scope = 2
//         console.log(scope)
//     }
//     console.log(scope)
// }
// constTest()

// //TLDR; let and const - block scope; var is not.
//--------------------------------------------------------

/*
SCOPE

JavaScript has both LOCAL and GLOBAL scope
*/

var x = 12;

function scope() {
    var x = 33;
    console.log(x);
}

scope()  //output -> 33
console.log(x); //output -> 12

//

var x = 12;

function scope() {
    x = 33;  // no var
    console.log(x);
}

scope(); //output -> 33
console.log(x); //output -> 33

//the two examples above are different because the first example
//had 2 variables named 'x'. the second example had just 1 variable
//named 'x' in the global scope

var x = 12;

function scope() {
    var x = 33;
    if (true) {
        var x = 45
        console.log(x);
    }
    console.log(x);
}
scope();
console.log(x);

//

let x = 12

function scope() {
    let x = 33
    if (true) {
        let x = 34
        console.log(x)
    }
    console.log(x);
}

scope();
console.log(x);

//

function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope)
    }
    console.log(scope)
}
constTest();
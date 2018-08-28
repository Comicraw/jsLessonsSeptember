//What is scope?
//JS has local and global scopes

var x = 12
//global x - global scope

//in order to see the stuff below we have to call back to it
function scope(){
    //scope is local to my function
    var x = 33
    console.log(x)
}
scope()
console.log(x)

function varTest(){
    var scope = 1
    if (true) {
        var scope = 2
        console.log(scope)
    }
    console.log(scope)
}
vartest()

//now with let
function letTest(){
    let scope = 1
    if (true) {
        let scope = 2
        console.log(scope)
    }
    console.log(scope)
}
letTest()

//not with const
function constTest(){
    const scope = 1
    if (true){
        const scope = 2
        console.log(scope)
    }
    console.log(scope)
}
constTest()

//TLDR; let and const - block scope; var is not.
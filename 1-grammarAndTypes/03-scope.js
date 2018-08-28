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
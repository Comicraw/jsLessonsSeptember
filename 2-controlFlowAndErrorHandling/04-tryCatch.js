function tryCatchDemo(a) {
    try {
        var upperCaseWord = a.toUpperCase();
        console.log(upperCaseWord);
    }
    catch(err) {
        console.log(err);
    }
}
tryCatchDemo('Hello');
/*
starter illustration of the syntax

try {
    Block to try
}
catch(err) {
    If the try block throws an exception, this block handles errors
}
 */
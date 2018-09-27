//function expressions is when 'function' is on right side of '='
//this is where hoisting comes in

var hi = function hi() {
  console.log('hello');
}

hi()

let hi = function hi() {}
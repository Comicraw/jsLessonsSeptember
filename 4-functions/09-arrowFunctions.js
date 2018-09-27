// //Arrow functions / Fat arrow functions
// //you cant have a fat arrow function declaration, will be on right side of = sign

// function coffee() {
//     console.log('coffee is tasty')
// }

// coffee();



// //'function' turns into '=>'
// let coffee = () => {
//     console.log('coffee is really tasty')
// }

// coffee();

// let cats = (kitten, puppy) => { console.log(`I have a ${kitten} and a ${puppy}.`)}

// cats(cat, dog)

// let apples = (x) => { console.log(x, 'apples for dinner') }
// //if you only have one parameter and curly(property, you can get rid of them
// let apples = x => console.log(x, 'apples for dinner')

// apples(10);

// let banana = b => {
//     let iceCream = b ** 2;
//     console.log(iceCream)
// }

// let clock = (t, r, e, s) => {};

// //line breaks are bad:

// //vvvvvvvvvvvvvv this has to stay one line
// let func = () => console.log('good'); //ok

//----------------------------------------------------------

let tea = () => {
    console.log('tea is awesome.')
}

tea();


var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cats, and ${puppy} dogs.`);
}

cats(2, 3);

//arrow function body styles
//concise

let apples = x => console.log(`There are ${x} apples.`)

apples(5);

//Block
let peaches = (x) => { console.log(`There are ${x} peaches`)}

peaches(6)
//what the heck is return

function capitalizeName(name) {
    let capName = '';
    for (let r in name) {
        if (r == 0) {
            capName += name[r].toUpperCase();
        } else {
            capName += name[r].toLowerCase();
        }
   }
   return capName
}
    
const myName = capitalizeName('coRy')
console.log(myName + ' how are you doing?');


/*
challenge:
make a tip caculator using a function
have it return the value
capture that returned value in a variable
print that variable
 */

function tipCalculator(receipt) {
    let tip = 0.2;
    let total = receipt * tip + receipt;
    return total
}

const totalBill = tipCalculator(32.65)
console.log(totalBill)

function tipCalc(bill) {
    let tipAmount = bill * 0.20;
    return tipAmount.toFixed(2);
}
const tip = tipCalc(234.23)
console.log(tip)



//--------------------------------------------


function tipCalculator(receipt) {
    let tip = 0.2
    total = tip * receipt + receipt
    return total
}

let totalBill = tipCalculator(40.00)
console.log(totalBill)
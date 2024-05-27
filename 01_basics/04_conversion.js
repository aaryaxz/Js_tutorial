// console.log("2"<=1)
// console.log("2"==2)
// console.log("2"===2) //error , In this case datatype should be same

//----------------------------------------------------------------------------------------------

console.log(null<1) // true
console.log(null==0) // false 
console.log(null<=0) // true

// This unexpected happens cauze in js the comparsion sign and eqaulity sign both differ -
// when we use comaprison sign then the value of null become zero , by default it is empty

// ---------------------------------------------------------------------------------------------

console.log(undefined <0) // flase
console.log(undefined <=0) // false
console.log(undefined ==0) // false

// ----------------------------------------------------------------------------------------------

// There is lot of problem in these types of conversion, which prefer not to do..
// It creates confusion also that's many one prefer typescript
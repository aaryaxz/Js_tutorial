//  ++++++++++++++++++++++++++++++++ NUMBERS ++++++++++++++++++++++++++++++++++++++


let num = 20 // here 20 is automatically a number
console.log(num)
let balance = new Number(20) // here we are defining that 20 is a number
console.log(balance)
console.log(balance.toString().length)

console.log(balance.toExponential()) // it converts number into string exponential notaion.
// result  = (2*10**1) {number} = 2 * e +1 {string}  [2 multiply by base e which is 10 to the power 1]

const num1 = 54.435343
console.log(num1.toFixed(2))
let value = num1.toPrecision(2)
console.log(value)

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // by default it is set to U.S standard
console.log(hundreds.toLocaleString('en-In')) // Indian values

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// +++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-10))
console.log(Math.round(3.6))
console.log(Math.ceil(2.3)) // 3
console.log(Math.floor(2.9)) // 2
console.log(Math.min(1,2,10,8))

console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10) + 1)

let min = 10
console.log((Math.floor(Math.random()*10 + 1) + min))
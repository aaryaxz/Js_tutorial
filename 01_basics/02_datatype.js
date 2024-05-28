"use strict"; // treat all code as newer version of js

// alert("Do not open ") // we are using nodejs not browser. We can use it but the syntax is different.

console.log("Hello world")

console.log(
    3+81
)  // not a good practice.Code readability shoud be high


//------------------------------------------------------------------------------------------------------------------------------------

// Primitive DataTypes

// number or integers -> 2,32.. max - 2 to power 53
// bigint
// string -> ""
// boolean -> true/false
// null -> standalone value
// undefined
// symbol -> unique

let age = 14 // Number
let bigNumber = 167247479473884392n // bigInt
let namee = "Aarya" //String
let isLoggedIn = true // Boolean
let value = null; // null
let stage; // undefined
let id = Symbol(1,2,3) // symbol
let anotherId = Symbol(1,2,3) 

console.log(id === anotherId)// false

//------------------------------------------------------------------------------------------------------------------------------------

// Reference(Non Primitive) Datatype

// Array 
// object 
// functions

let student_names = ["Avni","Somesh","Akriti"]


let myObj = {
    name:"Aarya",
    age:"12",
}


let myFunction = function(){
    console.log("Hemllo World")
   
}

//-----------------------------------------------------------------------------------------------------------------------------------

// type of Primitive Datatypes
console.log(typeof false)
console.log(typeof age)
console.log(typeof stage)
console.log(typeof value)
console.log(typeof id)
console.log(typeof bigNumber)
console.log(typeof namee)

// type of Reference Datatype
console.log(typeof student_names)
console.log(typeof myObj)
console.log(typeof myFunction)
// Date and Time

let myDate = new Date()
// console.log(typeof myDate)
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
let first_date = new Date(2024,0,2) // YY,MM,DD
let second_date = new Date('2023,12,20') // YY,MM,DD
let third_date = new Date('02,01,2024') // MM,DD,YY
let myCreatedDate = new Date(2024,0,2,4,6,3)
// console.log(first_date.toLocaleDateString())
// console.log(second_date.toLocaleDateString())
// console.log(third_date.toLocaleDateString())
// console.log(myCreatedDate.toLocaleString())

let timeStamp = Date.now()
// console.log(timeStamp)
//        OR
// let timeStamp1 = new Date
// console.log(timeStamp1.getTime())
console.log(Math.floor(timeStamp/1000)) // ms to s

let newDate = new Date()
console.log(newDate.toLocaleDateString())
console.log(newDate.getMonth()) // it starts from 0
console.log(newDate.getFullYear())

console.log(newDate.toLocaleString("default",{
    day:"2-digit"
}))
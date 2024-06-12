// Array

// Arrya copy-operation : 
// Shallow copy - it is somethin like Heap memory 
// Deep copy : it is something like Stack memory 

const list = [1,2,3,4,5]
console.log(list)

const name_list = ["Aarya","Nisith","Arka"]
console.log(name_list.length)
console.log(name_list[2])

const numList = new Array(3,54,90,1.2)
console.log(numList)

// Array Methods

list.push(10,20) // add element at end of list
// console.log(list) 
list.pop() // remove last element
// console.log(list)

list.unshift(8)// add element at start of list
// console.log(list)
list.shift() // remove first element
// console.log(list)

console.log(list.includes(10))
console.log(name_list.indexOf("Aarya"))


// Slice : it prints the given range, include first elem but exclude the last elem.
// Splice : it removes the given range from the list, include both elem.
console.log("A ",list)
console.log(list.slice(1,3))
console.log("B ",list)
console.log(list.splice(1,3))
console.log("C ",list)

// MERGING TWO OR MORE LISTS

let marvel_heros = ["Ironman","Thor","Antman"]
let dc_heros = ["Batman","Flash","Superman"]
let another_heros= ["Xlr8","AlienX","Greymatter"]

// let heros = marvel_heros.push(dc_heros) // 4 the lenght of array [ 'Ironman', 'Thor', 'Antman', [ 'Batman', 'Flash', 'Superman' ] ]
// console.log(marvel_heros)

let heros = marvel_heros.concat(dc_heros,another_heros)
console.log(heros)

// spread 
let other_heros = [...dc_heros,...another_heros,...marvel_heros]
console.log(other_heros)


let list_of_numbers = [1,2,3,[3,4,5,6],9,10,[1,2,[19,10,30,[2,4,5]]]]
console.log(list_of_numbers.flat(2))
console.log(list_of_numbers.flat(Infinity))


let name = "Aarya"
console.log(Array.isArray("Hello World"))
console.log(Array.from(name))
console.log(Array(name))
let data = {
    name : "hitesh",
    id : 200,

}
console.log(Array.from({name:"Aarya"}))

let score1 = 100
let score2= 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
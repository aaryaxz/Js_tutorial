// let obj = new Object()

let myObj = {}

myObj.name = "user"
myObj.id = 123
myObj.email = "user@gamil.com"

console.log(myObj)

// Nesting

let swiggyUser = {
    id: 420,
    name: {
        fullName: {
            firstName: "Aarya",
            lastName: "Singh"
        }
    }

}
console.log(swiggyUser.name.fullName.firstName)

// Merging two or more objects 

//Object.assign() method in JavaScript is used to copy the properties from one or more source objects 
// to a target object

// ** it is  like copying the contents of several boxes (source objects) and putting them into one big box (target object).

let target = {}
let obj1 = {
    a: 2,
    b: 3
}
let obj2 = {
    c: 4,
    d: 5
}

Object.assign(target, obj1, obj2)
console.log(target)

// obj3 = {...obj1,...obj2}  // spread method
// console.log(obj3)

let data = [
    {
        id: 5678,
        name: "User1"
    }, {
        id: 9876,
        name: "User2",
    }, {
        id: 898,
        name: "User3"
    }, {
        id: 7889,
        name: "User4"
    }, {
        id: 58,
        name: "User5"
    },

]
console.log(data[4].name)
console.log(Object.keys(obj1))
console.log(Object.values(obj2))
console.log(Object.entries(obj1))

console.log(obj1.hasOwnProperty("f"))

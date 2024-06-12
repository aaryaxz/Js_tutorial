// singleton
// Object create (constructor)

// Object literal

let mySym = Symbol("xyz")

let user = {
    name:"Aarya",
    "full Name":"Aarya Singh",
    id:233,
    age:23,
    isLoggedIn:false,
    LastloginDays:["Monday","Friday"],
    [mySym]:"my symbol",
}
// console.log(user.name)
// console.log(user["id"])
// console.log(user['full Name'])
// console.log(typeof user[mySym])
// console.log(user)

user.id = 200
console.log(user)

// Object.freeze(user) // if you wanna to lock the values.Dont want to change.
user.id = 300
console.log(user)

user.greeting = function(){
    console.log("Good Evening")
}
console.log(user.greeting())

user.greetingOne = function(){
    console.log(`Good Evening, ${this.name}`)
}
console.log(user.greetingOne())
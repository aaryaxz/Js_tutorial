// Stack memory (Primitive) => copy

let num1 = 3
let num2 = num1
num2 = 10
console.log(num1)
console.log(num2)

// Heap memory (Reference) => original

let userOne = {
    email : "xyz@gmail.com",
    id: 123,
}

let userTwo = userOne
userTwo.email = "Aarya@gmail.com"
console.log(userOne)
console.log(userTwo)

const name = "Aarya"
const age = 21

// not  a good practice becauze it is  outdated one

console.log('My name is ' + name + " and age is " + age) 
console.log("My name is " , name , " and age is ", age)

// instead of using that we can use this bacause it is more readable.

console.log(`My name is ${name} and age is ${age}`)

//-----------------------------------------------------------------------------------

const gameName = new String("apex legends")

// METHODS OF STRING

console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3)) // negative values do not work
console.log(name.at(-2))
console.log(gameName.indexOf("l"))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-7,12)
console.log(anotherString)

const user_name = "   subham awasthi\n"
console.log(user_name.trim()) // only remove white space plus line terminators(\n,\r..etc)

const url = "https://www.codera.com/coding_platform"
console.log(url.replace("codera","whiteHat;)"))
console.log(url.includes('sonu'))

const greeting = "Good Morning Dear"
console.log(greeting.split(" "))

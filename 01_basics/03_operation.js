// OPERATIONS

num1 = 20
num2 = 10
console.log(num1%num2); // it gives the remainder

str1 = "Hello"
str2 = " World"
console.log(str1+str2);
// console.log(str1-str2);  it is not an integer , we cannot perform such operation

//----------------------------------------------------------------------------------------------

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 4);
console.log(2 + 3*"1" + 2); // unexpected answer for me

console.log(+true)
console.log(+false)
console.log(+"")

//----------------------------------------------------------------------------------------------

// Prefix And Postfix Increment

let gameCounter = 100;
let x = gameCounter++; // show the result before incrementing
let y = ++gameCounter; //show the result after incrementing
console.log(x)
console.log(y) // it give 102 cauze here both time increment takes place.
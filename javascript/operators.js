// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

// JavaScript Assignment Operators
// The Assignment Operator = assigns values

// The Addition Operator + adds values
// console.log(3 + 5)
// console.log(3 + "Ether")

// The Multiplication Operator * multiplies values
console.log(3 * 3)
console.log(3 * "Esther") // NaN not a number

// The Comparison Operator > compares values
console.log(3 > 4)
console.log(3 < 4)

console.log("esther".length, "sanni".length)
console.log("ade".length > "sanni".length)

// **	Exponentiation (ES2016)
console.log(2 ** 3)
console.log(2 ** 4)

// %	Modulus (Division Remainder)
console.log(5 % 2)
console.log(4 % 2)

// +=
let y = 3
y += 1
console.log(y)

// -=
let x = 2
x -= 1
console.log(x)

// JavaScript Comparison Operators
// == equal to
console.log("== equal to start here")
console.log(1 == 1)
console.log(1 == "1")
console.log(1 == "100")
console.log(1 == "esther")

// === equal value and equal type (strictly eqaul to)
console.log("=== equal value and equal type start here")
console.log(1 === 1)
console.log(1 === "1")
console.log("sanni" === "sanni")
console.log(1 === "esther")

// !=	not equal
console.log("!= not equal start here")

// 1 not equal to 1
console.log(1 != 1)
console.log(1 != "1")
console.log("sanni" != "sanni")
console.log(1 != "esther")

// !==	not equal value or not equal type (not strictly eqaul to)
console.log("!== not equal value or not equal type start here")
console.log(1 !== 1)
console.log(1 !== "1")
console.log("sanni" !== "sanni")
console.log(1 !== "esther")

// >	greater than
console.log(">	greater than start here")
console.log(3 > 5)
console.log(10 > 5)

// <	less than
console.log("<	less than start here")
console.log(3 < 1)
console.log(3 < -2)
console.log(2 < 10)
console.log(-2 < 2)
console.log(2 < -2)

// >=	greater than or equal to
console.log(">=	greater than or equal to start here")
console.log(2 >= 4)
console.log(4 >= 2)
console.log(4 >= 4)

// <=	less than or equal to
console.log("<=	less than or equal to start here")
console.log(2 <= 4)
console.log(4 <= 2)
console.log(4 <= 4)

// ?	ternary operator
console.log("?	ternary operator start here")
console.log(5 === 4 ? true : false)
console.log("sanni" === "sanni" ? true : false)
console.log(4 > 1 ? "Greater" : "Not greater")

// if (5 === 4) {
//   console.log(true)
// } else {
//   console.log(false)
// }

function sayHello() {
  console.log("hello")
}
sayHello()

function greet(name) {
  console.log("Hello " + name)
}

greet("Sanni")
greet("Chinedu")
greet("Tinubu")
greet("Damilola")

function sayHi(a, b) {
  return a + b
  // Return KeyWord
}

console.log(sayHi("Hi", "Hello"))

// Funtion Expression
let sayGoodBy = function () {
  return "Goodbye"
}
console.log(sayGoodBy("Wassup"))

let add = function (a, b) {
  a + b
  return 1000
  // return a + b
}
console.log(add(1, 3)) // chinedu: 4, esther: 1000
console.log(add("1", 4)) // chinedu: 14, esther: 1000
console.log(add("1", "wassup")) // chinedu: 1wassup, esther: 1000
console.log(add("Hi", "You Good?")) // chinedu: HiYouGood?,  esther: 1000

// arrow function 1
const returnArrOfNumbers = () => [1, 2, 3, 4, 5]
console.log(returnArrOfNumbers())

const sum = (a, b, c) => a + b + c
console.log(sum(2, 2, 4))
console.log(sum(1, 1, 1))

const mutiply = (a, b) => a * b
console.log(mutiply(4, 4))

// arrow function 2
const sum1 = (a, b, c) => {
  let sumAllParameters = a + b + c
  return sumAllParameters
}

console.log(sum1(2, 1, 6))

const mutiply1 = (a, b, c) => {
  // let mutiplication = a * b * c
  let mutiplication = a * 3
  return mutiplication
}

console.log(mutiply1(2, 1, 3))

// assignment:
// search for the name of this type of funtion `function sayHi(){}`

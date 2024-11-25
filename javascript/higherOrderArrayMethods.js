const people = [
  { name: "Sanni", age: 22, gender: "Male" },
  { name: "Chinedu", age: 40, gender: "Male" },
  { name: "Esther", age: 69, gender: "Female" },
]

console.log(people[1].name)
console.log(people[1].age)

// using
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name.toUpperCase())
}

// Higher Order Array Methods Start Here
// _______________________________

// Map: A map create a new array by applying a function to each item in the original array
const names = people.map((item) => {
  return item.name.toUpperCase() // using callback( function declaration)
})
const names1 = people.map((item) => item.name.toUpperCase()) // using callback(arrow function)

console.log(names)
console.log(names1)

// return new array of the names in upperCase
console.log(people.map((i) => i.age)) // return new array of the ages

// Filter: Selecting Specific items
// create a new array by keeping only items that pass a condition
const getMale = people.filter((i) => {
  // if (i.gender === "Female") {
  //   return i.gender === "Female"
  // }
  return i.gender === "Female"
})
console.log(getMale)

const olderThan30 = people.filter((person) => person.age > 30)
console.log(olderThan30)

console.log(people)
const getShortNames = people.filter((i) => i.name.length <= 6)
console.log(getShortNames)

// task
// return anyone that's 69 year old
const age69 = people.filter((c) => c.age === 69)
console.log(age69)

// reduce
let total = 0
const num = [1, 10, 10] // add all the numbers in the array
for (let i = 0; i < num.length; i++) {
  total += num[i]
}
console.log(total)

const sum = num.reduce((total, current) => {
  return total + current
}, 1)
const sum1 = num.reduce((total, current) => total + current, 0)
console.log(sum)
console.log(sum1)

// accumulate ages from the people arr
// using forLoop
let totalAge = 0
for (let i = 0; i < people.length; i++) {
  totalAge += people[i].age
}
// console.log(totalAge)

const totalAge1 = people.reduce((sum, item) => {
  return sum + item.age
}, 0)
console.log(totalAge1)

console.log(people)
// find - find the first item that matches a condition
// the find method returns the first item in an array that matches a specified condition. if no items match, it return undefined
// find
const foundPerson = people.find((person) => person.name === "Sanni")
console.log(foundPerson)
const findNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(findNum.find((num) => num === 10))

// some - check if at least one item matches a condition
// the some method checks if at least one item in the array meets a condition. it return true or false
console.log(
  findNum.some((num) => {
    return num === 10 // try 1 as in num === 1
  })
)

// every - check if all items match a condition
// Explanation: the every method checks if all items in an array meet a condition. it also return true or false

const allOlderThan20 = people.every((person) => person.age > 20)
console.log(allOlderThan20)

//  sort - sort array items, the sort methods sorts the items in an array based on a condition, like sorting by age or name, by default it sorts alphabetically, so numbers need extra handling

let numberss = [2, 1, 4, 5, 6, 7, 2, 2, 2, 3]
// console.log(numberss.sort((a, b) => a - b))
// console.log(numberss.sort((a, b) => b - a))
// let alpha = ["c", "a", "e", "d"]
// console.log(alpha)

const sortByAge = people.sort((a, b) => a.age - b.age)
console.log(sortByAge)

console.log(people)
// forEach
people.forEach((e) => console.log(e.name.toUpperCase()))

// creating a simple calculator
// write a simple add, subtract, multiply, and divide function, then create a calculate function that takes two numbers and an operation like (+, -, /, *) and calls the corresponding function

function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}

function calculate(a, b, operation) {
  if (operation === "*") {
    return multiply(a, b)
  } else if (operation === "+") {
    return add(a, b)
  } else if (operation === "-") {
    return subtract(a, b)
  } else if (operation === "/") {
    return divide(a, b)
  } else {
    return "Input an Operator"
  }
}

console.log(calculate(4, 2, "slhshjhs"))

// assignment
// ( slice, Splice)

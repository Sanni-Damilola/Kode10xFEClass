// Lesson Plan: Higher-Order Array Methods with Objects
// Explain Arrays of Objects
// Start with a quick introduction:
// An array can hold multiple objects, and each object can represent an item with various properties. For example, an array of people objects:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
]
// Demonstrate how to access each person’s name or age:
console.log(people[0].name) // "Alice"
console.log(people[1].age) // 30

// map - Transforming Each Item in an Array (30 minutes)
// Explanation of map
// map creates a new array by applying a function to each item in the original array.

// Example Task 1: Extract Names
// Use map to create a new array that contains only the names of the people.
const names = people.map((person) => person.name)
console.log(names) // ["Alice", "Bob", "Charlie"]

// Calculate Ages in 5 Years
// Use map to create a new array with each person’s age in 5 years.

const agesIn5Years = people.map((person) => person.age + 5)
console.log(agesIn5Years) // [30, 35, 40]

// Practice Task
// Have students create a function to transform the array into objects with name and ageIn5Years properties:

// filter - Selecting Specific Items
// Explanation of filter
// filter creates a new array by keeping only items that pass a condition.

// Example Task 1: People Older than 30
// Use filter to get an array of people who are older than 30.

const olderThan30 = people.filter((person) => person.age > 30)
console.log(olderThan30)

// Short Names
// Filter to get names shorter than 5 characters.
const shortNames = people.filter((person) => person.name.length < 5)
console.log(shortNames)

// Practice Task
// Ask students to filter people who are exactly 30 years old:
const age30 = people.filter((person) => person.age === 30)
console.log(age30)

// reduce - Summarizing or Accumulating Array Data (45 minutes)
// Explanation of reduce
// reduce combines all items in an array into a single result. It takes a function with an accumulator (total so far) and the current item.

// Example Task 1: Total Age
// Use reduce to get the sum of everyone’s age.

const totalAge = people.reduce((total, person) => total + person.age, 0)
console.log(totalAge) // 90

// Average Age
// Calculate the average age using reduce:
const averageAge = totalAge / people.length
console.log(averageAge) // 30

// Find the longest name using reduce:
const longestName = people.reduce((longest, person) => {
  return person.name.length > longest.length ? person.name : longest
}, "")
console.log(longestName) // "Charlie"

// find - Find the First Item That Matches a Condition
// Explanation: The find method returns the first item in an array that matches a specified condition. If no items match, it returns undefined.

// Example Task: Find a Person Named "Charlie"

const foundPerson = people.find((person) => person.name === "Charlie")
console.log(foundPerson) // { name: "Charlie", age: 35 }

// some - Check If At Least One Item Matches a Condition
// Explanation: The some method checks if at least one item in the array meets a condition. It returns true or false.

// Example Task: Check if Anyone is Older than 30
const isOlderThan30 = people.some((person) => person.age > 30)
console.log(isOlderThan30) // true, because "Charlie" is older than 30

// every - Check If All Items Match a Condition
// Explanation: The every method checks if all items in an array meet a condition. It also returns true or false.

// Example Task: Check if Everyone is Older than 20
const allOlderThan20 = people.every((person) => person.age > 20)
console.log(allOlderThan20) // true, because everyone is older than 20

// sort - Sort Array Items
// Explanation: The sort method sorts the items in an array based on a condition, like sorting by age or name. By default, it sorts alphabetically, so numbers need extra handling.

// Example Task: Sort People by Age
const sortedByAge = people.sort((a, b) => a.age - b.age)
console.log(sortedByAge)

// forEach - Execute a Function for Each Item
// Explanation: The forEach method runs a function on each item in the array, like printing each name. Unlike map, it does not create a new array.

// Example Task: Log Each Person’s Name
people.forEach((person) => console.log(person.name))

// Function Exercises
// Creating Calculator Functions
// Write a simple add, subtract, multiply, and divide function. Then create a calculate function that takes two numbers and an operation (like +, -, *, /) and calls the corresponding function.

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
  if (operation === "+") return add(a, b)
  if (operation === "-") return subtract(a, b)
  if (operation === "*") return multiply(a, b)
  if (operation === "/") return divide(a, b)
}

console.log(calculate(10, 5, "+")) // 15


// Find Person by Name Function
// Create a function findPersonByName that takes an array of people and a name, and returns the person’s object if found.
function findPersonByName(people, name) {
  return people.find(person => person.name === name);
}
console.log(findPersonByName(people, "Alice"));


// Generate Array of Ages Function
// Write a function getAges that takes an array of people and returns an array of their ages using map.
function getAges(people) {
  return people.map(person => person.age);
}
console.log(getAges(people)); // [25, 30, 35]


// Introduction to the DOM
// What is the DOM?
// Introduce the DOM (Document Object Model), explaining it as a way to represent and manipulate HTML elements using JavaScript.

// Basic HTML Setup
// Use the following HTML as a starting point for practice:
{/* <h1 id="header">Welcome!</h1>
<p id="intro">Hello, this is an introduction paragraph.</p>
<button id="changeTextButton">Change Text</button>
<button id="changeColorButton">Change Color</button> */}
// DOM Manipulation Tasks

// Change Text Content
// Write a function that changes the <h1> text when a button is clicked:
// document.getElementById("changeTextButton").onclick = function() {
//   document.getElementById("header").innerText = "You changed me!";
// };
// Change Color
// Write a function that changes the color of the paragraph text:
// document.getElementById("changeColorButton").onclick = function() {
//   document.getElementById("intro").style.color = "blue";
// };

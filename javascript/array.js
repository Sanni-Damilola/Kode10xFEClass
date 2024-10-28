// Naming Conventions
const greet_all_staff = "Hello Everyone"
const greetAllFamilyMembers = "Hello Everyone"
const GREET_ALL_FAMLY_MEMBERS = "Hello Everyone"

// Array ["", 1, true, underfined, null, [] ]
let data = ["Sanni", 40, null, 50, "Wassup"]
const returnDataIndexPosition = data[0]
// console.log(returnDataIndexPosition)

// data = ["Esther", 40, null, 50, "Wassup"]

data[0] = "Esther"
data[1] = 70

let test = data[0]
// console.log(test)
// console.log(data)

// Array Methods
// pop
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.pop()
fruits.pop()
fruits.pop()
fruits.pop()
fruits.push("pawpaw")
// console.log(fruits)

// push
fruits.push("pawpaw")
// console.log(fruits)

// Shift
const names = ["Sanni", "Chinedu", "Esther", "David", "Jesus"]
// console.log(names.length)

names.shift()
// let checkThis = names.shift()
// console.log(checkThis)
// console.log(names.length + 1)

// unshift
names.unshift("Olamide")
// console.log(names)

// Print the number 40 to the console from the check variable.

// javascript
const check = '"Sanni", 40, null, undefined, "Wassup"'
const get40 = check.split(",")[1]
// console.log(get40)

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 5, 4, 3, 1]
// console.log(numbers)
// console.log(numbers.sort())
const alpha = ["cat", "dog", "house", "goat", "ant", ""]
// console.log(alpha)
// console.log(alpha.sort())
const animals = [
  "Dog",
  "Cow",
  "Cat",
  "Horse",
  "Donkey",
  "Tiger",
  "Lion",
  "Panther",
  "Leopard",
  "Cheetah",
  "Bear",
  "Elephant",
]
console.log(animals.sort())

const joinThis = ["Hello", "Esther", "hope You good?"]
// console.log(joinThis)
// console.log(joinThis.join("-"))

const chageArryToString = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(chageArryToString)
// console.log(chageArryToString.toString())

const reverseThis = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(reverseThis)
console.log(reverseThis.reverse())

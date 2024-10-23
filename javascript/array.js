// Naming Conventions
const greet_all_staff = "Hello Everyone"
const greetAllFamilyMembers = "Hello Everyone"
const GREET_ALL_FAMLY_MEMBERS = "Hello Everyone"

// Array ["", 1, true, underfined, null, [] ]
let data = ["Sanni", 40, null, 50, "Wassup"]
const returnDataIndexPosition = data[4]
// console.log(returnDataIndexPosition)

// data = ["Esther", 40, null, 50, "Wassup"]

data[0] = "Esther"
data[1] = 70

console.log(data)

// Array Methods
// pop
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.pop()
fruits.pop()
fruits.pop()
console.log(fruits)

// push
fruits.push("pawpaw")
console.log(fruits)

// Shift
const names = ["Sanni", "Chinedu", "Esther", "David", "Jesus"]
names.shift()
console.log(names)

// unshift
names.unshift("Olamide")
console.log(names)

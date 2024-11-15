const people = [
  { name: "Chinedu", age: 40 },
  { name: "Esther", age: 69 },
  { name: "Sanni", age: 22 },
]

console.log(people[1].name)
console.log(people[1].age)

// using
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name.toUpperCase())
}

// Map: A map create a new array by applying a function to each item in the original array
console.log(people.map((i) => i.name.toUpperCase())) // return new array of the names in upperCase
console.log(people.map((i) => i.age)) // return new array of the ages

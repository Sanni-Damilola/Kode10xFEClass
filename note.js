// loop
// funtion
// map
// filter

// loop
// start
// condition
// increment

// while
// for
// do while

// for (start; condition; increment) {
//   console.log("how're you")
// }

// for (let i = 0; i < 5; i++) {
//   console.log("how're you")
// }

// const name = "christian how're you this is number"

// for (let index = 0; index < 10; index++) {
//   let updatedName = name.concat(`${ index }`)
//   console.log(updatedName)
//   console.log(name + index)
// }

const sayHello = () => {
  let word = "Wassup"
  return word
}

// console.log(sayHello())

// parameter
// const sayName = (name) => {
//   return name
// }

// console.log(sayName("Dami"))

// const add = (firstNum, seconddNum) => {
//   let result = firstNum + seconddNum
//   return result
// }

// console.log(add(2, 1))

// const division = (firstNum, seconddNum) => {
//   let result = firstNum / seconddNum
//   return result
// }

// console.log(division(10, 2))

// map
let info = [
  { name: "sanni", age: 90 },
  { name: "christian", age: 50 },
  { name: "peter", age: 20 },
]

// console.log(info[2].name)

let value = info.map((e) => {
  return e.name
})

console.log(value)

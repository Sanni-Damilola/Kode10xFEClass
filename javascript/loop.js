// For Loop in JS
// A for loop is used to repeat a task multiple times. it's great for things like going through a list items. A for loop has three part:
// A starting point (where it begins)
// A condition (how long it should run)
// An update (usually increase the count)

for (let i = 0; i < 5; i++) {
  //   console.log(i)
}

let fruits = ["apple", "banana", "cherry"]
for (let i = 0; i < fruits.length; i++) {
  //   console.log(i)
  console.log(fruits[i])
}

// for (let i = 1; i < 1000; i++) {
//   console.log("am sorry")
// }

let word = "javascript"
for (let index = 0; index < word.length; index++) {
  console.log(word[index])
}

for (let number = 4; number > 0; number--) {
  console.log(number)
}

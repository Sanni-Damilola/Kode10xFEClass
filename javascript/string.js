let text = 'We\'re so-Called "Vikings" From the north.'
// console.log(text)
let family = "Jesus"
// console.log(family)

// String Methods

// 1: Length
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// console.log(alphabet.length)

// let muttipleNumbers = "123456789".length
// console.log(muttipleNumbers)
let space = " "
// console.log(space.length + 2)

// // chatAt()
let greet = "Hello World"
// console.log(greet.charAt(10))

// // charCodeAt
// let text1 = "How Are you?"
// console.log(text1.charCodeAt(1))

// // at
// let name = "Hello World"
// console.log(name.at(1)) // outdated

// toUpperCase()
let userName = "sanni damilola"
let n = "n"
console.log(n.indexOf("e"))
console.log(
  userName.toUpperCase().toLowerCase().charAt(3).toUpperCase().indexOf("n")
)

// toLowerCase()
let myName = "JOHN"
console.log(myName.toLowerCase())

// // index of
let alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// console.log(alphabet2.indexOf("a"))

// includes
// console.log(alphabet2.includes("a"))

// replace
let goal = "I'm learning to become a FRONTEND DEVELOPER at Kode10x"
let myFriendGoal = goal
let numValue = "1"
console.log(numValue.replace("1", "2"))

console.log(
  myFriendGoal.replace(
    "FRONTEND DEVELOPER at Kode10x",
    "BACKEND DEVELOPER at Alx"
  )
)

let myBrotherFaceBookName = "Emmanuel"

myBrotherFaceBookName = "Sanni"
myBrotherFaceBookName = console.log(myBrotherFaceBookName)

// toString()
let num = 1000
console.log(num)
console.log(num.toString())
num = num.toString()

num = true
num = undefined
num = "hi"

console.log(typeof num)

// difference between var, let and const
// var
var familyName = "Tinubu"
var familyName = "Ademola"
var familyName = "Ademola"
familyName = "Esther"
console.log(familyName)

// let
let footBallTeam = "Man City"
// let footBallTeam = "Man u" // Error
footBallTeam = "Man u"

// const
const myAge = 40
// const favMusic = "Way Up" // Error
// myAge = 30 // Error

// last index of
const getLastIndex = "h h h"
console.log(getLastIndex.lastIndexOf("h"))

// concat
const myFriendName = "jadorita "
const greetFriend = "Hello, How are You?"
const greetFriendName = myFriendName.concat(
  greetFriend,
  "Are You Prepared For today's exam"
)
console.log(greetFriendName)

// start with
const checkStartWith = "123456"
console.log(checkStartWith.startsWith(""))

const doThis = "yo! " + myFriendName + greetFriend
console.log(doThis)



// console.log(getSpace.split(" ").length - 1)

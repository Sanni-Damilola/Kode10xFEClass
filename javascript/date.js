// Date Handling in JS
// you can get a specific parts of a date (like the year or month)
// and format them in different ways

// getting the current date

const today = new Date()
console.log(today)

const currentYear = today.getFullYear()
const currentMonth = today.getMonth()
const currentDate = today.getDate()

console.log(currentDate)
console.log(currentMonth)
console.log(currentYear)

// setting a specific date
const birthday = new Date("2025-11-04")
console.log(birthday)

// converting date to string
console.log(today.toLocaleDateString()) // convert date to string based on local conventions (like MM/DD/YYY) or (DD/MM/YYYY) in other places

console.log(today.toDateString()) // convert date to human-readable date format

console.log(today.toTimeString()) // convert the date to a string, showing only the time

console.log(today.toLocaleString()) // convert the date to a full localized string, showing both date and time

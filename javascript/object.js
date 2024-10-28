// object
let user = {
  name: "Esther",
  complextion: "Fair",
  student: true,
}

user.name = "Sarah"
user.complextion = "Dark"
user.student = false

// console.log(user)
// console.log(user.name)
// console.log(user.complextion)
// console.log(user.student)

const person = {}
// console.log(person)

person.firtName = "Esther"
person.lastName = "Sarah"
person.age = 40
// console.log(person)
// console.log(person["firtName"])
// console.log(person["lastName"])
// console.log(person["age"])

let myData = new Object("John", "Doe", 40, "white")
// console.log(myData)

const school = {
  name: "The Light",
  color: "Red and Blue",
  college: false,
  student: { studentNames: ["Chinedu", "Esther"] },
  teacher: { name: "Sanni" },
  createdAt: 1940,
}

let schoolName = school.name
// console.log("School Name:", schoolName)

let schoolColor = school.color
// console.log("School Color:", schoolColor)

let isCollege = school.college
// console.log("Is the School a College?",isCollege)

let studentInSchool = school.student
let test = "word" + "1" + "1"

// console.log("These are the students in " + schoolName + " School", studentInSchool)

// let teacherInSchool = school.teacher
// console.log(school)
// console.log(school.teacher.name)
// console.log(schoolName + " School Teacher Name is: ", teacherInSchool.name)
// The Light School Teacher Name is: Sanni

console.log(school);
console.log(school.student.studentNames[1]);



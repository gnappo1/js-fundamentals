// Ways to play with JS: terminal (node path/to/file), select lines and click `run code`, launch chrome-debugger, quokka

//Variables

// var name = "Luigi"
// console.log(name)
// let age = 76
// const person = {name, age}
// person.name = "David"
// console.log(person)

// Data Types
// String, BinInt, Boolean, Symbol, Undefined, Null, Number

//Structural types
// Array, Object, Function

// Falsey values
// null, 0, false, "", undefined, NaN

//Return
// same as Ruby, do not forget to explicitly return! There are no implicit returns in JS.

//Conditional
// if (false) {
//     console.log("Hello")
// } else if (num === 2) {
//     console.log("Num is 2")
// } else {
//     console.log("Num is whatever")
// }

//ternary
// num == 4 ?  true : false


//switch statements
// switch(num) {
//     case 1:
//         console.log("Num is 1");
//     case 4:
//         console.log("Num is 4");
//         break
//     default:
//         console.log("Num is none of the options above");
// }

//Arrays
// let students = ["Matteo", "Cernan", "Ashlee"]
// const [one, two, three] = students
// console.log(one)

//Iterators
// // forEach, map, filter, reduce
// students.filter(function(el) {
//     if (el.includes("tt")) {
//         return `${el}!`
//     }
// })

//Objects
// let dog = {
//     name: "Fido"
// }
// let person = {
//     name: "Matteo",
//     age: 29,
//     interests: ["vb", "coding"],
//     nameHobby: function(a) {
//         return a
//     }
// }

// console.log(person.nameHobby)

// const {name} = dog
// console.log(name)
// const {name, age, interests, nameHobby} = person //destructuring
// console.log(name)
// console.log(person["name"])
// console.log(person.name)

// Functions

// Declaration (cannot be anonymous)
function sumAndB(a, b) {
    return a + b
}

//Expression (can be anonymous but preferred not)
// const name = function(a, b) {
//     return a + b;
// }

// const shortName = function thisIsABetterPractice(a, b) {
//     return a + b;
// } 

// Arrow Function (ES6)
// const nameOfFunction = (a, b) => a + b

// console.log(nameOfFunction(1, 3))

// IIFE

// (function sumAndB(a, b) {
//     return a + b
// })(1, 3)

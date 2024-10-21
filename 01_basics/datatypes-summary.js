// Primitive Data Types

// 7 Types : String , Number , Boolean , Null , Undefined , Synmbol , BigInt


const score = 100
const scoreValue = 100.3

const loggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol("123")
console.log(id === anotherId);


const bigNumber = 123456789n


// Refernece Type (Non Primitive Data Types)

// Array , Objects , Functions 

const heros = ["Shaktiman" , "Naagraj"]
let myObj = {
    name: "Ayush",
    age: "24",
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros)



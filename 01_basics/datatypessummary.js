//  Primitive data types 

//? type: String, Number ,Boolean ,null ,undefined, Symbol, BigInt

const score =100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid)

const bigNumber = 32425346564552345323454n

//Non Primitive datatypes or references

// Array ,Objects , Funtions
// dataypes return => function

const heros =["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"himmath",
    age:21,
}

const myFunction = function(){
    console.log("hello world")
}

// console.log(typeof id);


// ****************************************************

// Stack (primitive),  = it makes copy and then give that value
// Heap(Non-Primitive) = it give the reference of the original value

let myYouTubeName = "HimmathChaudhary"

let anothername =myYouTubeName
anothername= "kumarhimmath"

console.log(myYouTubeName);
console.log(anothername);

let user ={
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo =user

userTwo.email ="himmath@gmail.com"

console.log(user.email)
console.log(userTwo.email)

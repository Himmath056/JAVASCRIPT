//  singleton  is been made by constructor
// Object.create

// objects literals

const mySym = Symbol("key1")
const JSUser ={
    name: "Himmath",
    "full name" :"Himmath Kumar",
    age: 21,
   [ mySym] :"MyKey1",   // Symbol 
    location : "mangalore",
    email : "himmath@gmail.com",
    isLoggedIn: false,
    lastLoginDays :["Monday", "Saturday"],

}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);    // symbol print


// JSUser.email ="Himmath@google.com"
// Object.freeze(JSUser)
// JSUser.email ="Himmath@microsoft.com"
// console.log(JSUser.email);
// console.log(JSUser);


JSUser.greeting =function(){
    console.log("Hello JS User");
    
}
JSUser.greetingTwo =function(){
    console.log(`Hello JS User ${this.name}`);
    
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());



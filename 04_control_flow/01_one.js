// if

const isUserLoggedIn = true
const temperature = 41

// if(temperature < 50){
//     console.log("Temperture less than 50");
// }else{
//     console.log("Temperature greater than 50");
// }
// console.log("Executed");

// < , >, <=,  >=, ==, === ,!= ,!==

// const score =200

// if (score > 100)
// {
//     const power ="fly"
//     console.log(`User power ${power}`)
// }

// console.log(`User power ${power}`)


const balance = 1000

// if (balance >500)  console.log("test");  //implicit scope

// if(balance < 500){
//     console.log("less than 500");
// }else  if(balance < 750){
//     console.log("less than 750");
// }else  if(balance < 900){
//     console.log("less than 900");
// }else  {
//     console.log("greater than 900");
// }


const userLoggedIn = true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail =true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to purchase course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}


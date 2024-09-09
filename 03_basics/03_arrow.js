//  this => referes to to the present context

const user ={
    username :"Himmath",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} Welcome to website`)
        console.log(this)
    },
   
}

// user.welcomeMessage()
// user.username ="Sam"
// user.welcomeMessage()

// console.log(this)

function chai(){
    let username ="Himmath"
    console.log(this.username);   // this => will not work in function 
    
}

// chai()


const chai1 = () =>{         // arrow function
    let username ="Himmath"
    console.log(this); 
}
chai1()

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

// const addTwo = (num1, num2) =>  num1+num2

// const addTwo = (num1, num2) =>  (num1+num2)

const addTwo = (num1, num2) =>  ({username:"himmath"})

console.log(addTwo(3,4));


const myArr =[2,3,5,7,9]

myArr.forEach(() => {})
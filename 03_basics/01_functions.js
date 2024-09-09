

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("M");
    console.log("A");
    console.log("T");
    console.log("H");

}

// sayMyName()    call of function


// function addTwoNumbers(number1 , number2){   //parameter
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1 , number2){   //parameter
    
    // let result = number1+ number2
    // console.log("Himmath");
    // return result
    
    return number1+number2
    
}

const result = addTwoNumbers(3,5) // arguments

// console.log("Result:",result)

function loginUserMessage (username= "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Himmath"))
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){   //rest operator
    return num1
}

// console.log(calculateCartPrice(200, 499, 500,3000));

const user ={
    username :"Himmath",
    price: "999",
}


function handleObject(anyObject){
    console.log(`Usename is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username :"Sam",
    price: "99",
})

const myNewArray =[200,400,600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));

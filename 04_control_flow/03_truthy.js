// const userEmail ="h@gmail.com"
const userEmail =[]

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Dont have user email");
    
}

// falsy values

// false, 0, -0 ,BigInt 0n , "", null , undefined, NaN

//truthy values
// "0" ,'false', " " , [] , {} , function(){} ,

// if (userEmail.length == 0) {
//     console.log("Array is empty");
    
// }

const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("object is Empty"); 
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 =null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15        //to handle error
console.log(val1);


// Terniary Operator ?

// condition ? true : false

const iceTea =100
iceTea >=80 ? console.log("greater than 80") : console.log("less than 80");



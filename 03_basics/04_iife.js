//  Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // name IIFE
    console.log(`DB connected`);    
})();    // to end the execution

// ()() //IIFE ,used to reduce the polution due to global scope

((name)=>{
    // unamed iife
    console.log(`DB CONNECTED TWO`);
    
})("Himmath");
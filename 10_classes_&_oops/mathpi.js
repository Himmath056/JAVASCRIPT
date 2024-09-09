const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(Math.PI);
// Math.PI =5
// console.log(Math.PI);

console.log(descripter);

const chai = {
    name: "ginger Chai",
    price :258,
    isAvailable:true,

    orderChai : function(){
        console.log("Chai nahi chali");
        
    }
}


Object.defineProperty(chai, 'name',
    {
        // writable:false,
        enumerable:true,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
        console.log(`${key} ${value}`);
    }
}
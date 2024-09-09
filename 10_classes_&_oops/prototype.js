let myName = "Himmath    "
let myChannel = "Chai    "

// console.log(myName.trueLenght())

let myHeros = ["Thor","spiderman"]

let heroPower ={
    thor :"Hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`)   
    }
}

Object.prototype.himmath =  function(){
    console.log(`Himmath is present in all object`);
    
}

Array.prototype.heyHimmath = function(){
    console.log(`Himmath say Hello`);
    
}

// heroPower.himmath()
// myHeros.himmath()
// heroPower.heyHimmath()
// myHeros.heyHimmath()


// inheritence
const user = {
    name:"chai",
    email:"chai@gmail.com",
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport ={
    isAvailable :false
}

const TASupport ={
    makeAssignment :"JS assignment",
    fullTime : true,
    __proto__:TeachingSupport
}


Teacher.__proto__ =user


//modern sytax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiAurCode   "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
    
}

anotherUsername.trueLenght()
"Himmath".trueLenght()
"iceTea".trueLenght()


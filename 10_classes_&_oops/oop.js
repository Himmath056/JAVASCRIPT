const user = {
    username:"himmath",
    logincount: 8,
    signedin:true,

    getUserDetails: function(){
        // console.log("got user detail from DB");
        // console.log(`Username ${this.username}`);
        console.log(this);
        
    },
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()    //constructor function - new ,gives new function every time

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn  =  isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}

const userOne =new User("HImmath", 7,true)
const userTwo =new User("Chai aur code", 8,false)  
console.log(userOne.constructor);
// console.log(userTwo);



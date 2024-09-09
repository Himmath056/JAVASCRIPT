class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USername is ${this.username}`);
    }

    static createId(){
        return `123`
    }
   
    
}

const himmath = new User("Himmath")
// console.log(himmath.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.logMe())
class User{
    constructor(email,password){
        this.email =email
        this.password =password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}himmath`
    }
    set password (value){
        this._password =value
    }
}
const himmath = new User("H@gmail.com","abc")
console.log(himmath.password);
console.log(himmath.email);

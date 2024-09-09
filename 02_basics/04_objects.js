// const tinderUser = new Object()  singletone objectt

const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name ="Himmath"
tinderUser.isLoggedIn =false

// console.log(tinderUser)

const regularUser ={
    email : "user@gmail.com",
    fullname:{
        userfullname :{
            firstname : "Himmath",
            lastname : "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={ 1: "a", 2:"b"}
const obj2 ={ 3: "c", 4:"d"}
const obj4 ={ 5: "e", 6:"f"}


// const obj3 ={obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2 ,obj4)

const obj3 ={...obj1,...obj2,...obj4}

// console.log(obj3);



const users = [
    {
        id :1,
        email : "h@gmail.com",
    },
    {
        id :2,
        email : "h@gmail.com",
    },
    {
        id :2,
        email : "h@gmail.com",
    },
] 


// console.log(users[0].id);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // to keep in array and perform op
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))   // shows property is available


const course ={
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor: "hithesh",
}

// course.courseInstructor

const {courseInstructor: instructor} = course   // destructuring

console.log(instructor);


// const navbar =({company}) =>{  // destructoring of company

// }
// navbar(company = "himmath")




// JSON discusss

// {
//     "name" :"hithesh",
//     "coursename" : "js in hindi",
//     "price" : "free",
// }


// [
//     {},
//     {},
//     {}
// ]
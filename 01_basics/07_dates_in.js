//DATES

let  myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

console.log(typeof myDate); //object

// let myCreatedDate = new  Date(2023,0,23)  // month start in 0 for JAn
// let myCreatedDate = new  Date(2023,0,23 ,5 ,3)  
// let myCreatedDate = new  Date("2023-01-14")  
let myCreatedDate = new  Date("01-14-2024")   
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp =Date.now()


// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // to comapre in milli seconds

// console.log(Math.floor(Date.now()/1000)); //in seconds

let newDate = new Date()
// console.log(newDate.getDay()+1);
// console.log(newDate.getMonth()+1);


let modifiedDate = newDate.toLocaleString('default',{
    weekday:"long",
    
})

console.log(modifiedDate);







const coding  =["js","ruby","java","python","cpp"]


// coding.forEach( function (item){          // callback function
//     console.log(item);
// })

// coding.forEach( (item) => {        // arrow function
//     console.log(item);
    
// })

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item ,index ,arr) => {
//     console.log(item ,index ,arr);
    
// })


const mycoding =[
    {
        langName :"Javascript",
        langFileName :"js"
    },
    {
        langName :"Java",
        langFileName :"java"
    },
    {
        langName :"python",
        langFileName :"py"
    },
]

mycoding.forEach( (item) =>{
    console.log(item.langName);
    
})
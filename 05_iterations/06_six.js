const coding  =["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item      // return not possible like this
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> num > 4 )         //scope should be taken care
// const newNums = myNums.filter( (num)=>{
//    return num > 4
// } )

const newNums =[]
myNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums);


const books =[
    {
        title :'Book one', genre :'Fiction' , publish: 1919,
    },
    {
        title :'Book tow', genre :'Scifi' , publish: 1940,
    },
    {
        title :'Book three', genre :'love' , publish: 1969,
    },
    {
        title :'Book four', genre :'Action' , publish: 2023,
    },
]

let userBooks = books.filter( (bk)=> bk.genre == "love" )
userBooks = books.filter( (bk)=> {
     return (bk.publish >= 1995  && bk.genre ==="Action")
})


console.log(userBooks);

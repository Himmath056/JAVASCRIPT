const myNums =[1,2,3]

// const initialValue =0

//  reduce
// const myTotal = myNums.reduce( function (acc , curval){
//     console.log(`acc :${acc} and curval :${curval}`);  
//     return acc + curval
// },0)


const myTotal = myNums.reduce((acc,curval) => acc+curval,0)

console.log(myTotal);


const shoppingCart =[
    {
        itemName : "js course",
        price : 2999,
    },
    {
        itemName : "py course",
        price : 999,
    },
    {
        itemName : "Mobile Dev course",
        price : 5000,
    },
    {
        itemName : "Data Scientist course",
        price : 12000,
    },
    
]

const cartTotalPrice = shoppingCart.reduce( (acc, item) => item.price+acc,0)

console.log(cartTotalPrice);


// var c =300

let a =300

if (true){
    let a = 10
    const b =20
    // c =30 
    // console.log("INNER :" ,a);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const username ="Himmath"

    function two(){
        const website ="Youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username ="hithesh"
    if(username ==="hithesh"){
        const website =" Youtube"
        // console.log(username+ website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// ********************* interesting ****************************

console.log(addOne(5))

function addOne(num){
    return num+1
}


addTwo(5)   // this is due to  access 'addTwo' before initialization
const addTwo =function(num){
    return num+2
}

// addTwo(5)
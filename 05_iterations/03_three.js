//  for of

// ["",'', '']
// [{},{},{}]


const arr = [1 ,2 ,3 ,4 ,5]

for (const num of arr) {
    // console.log(num);
}

const greetings =" hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


//  Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United states of America")
map.set('FR',"France")
map.set('IN',"INDIA")

// console.log(map)

for (const [key, Value] of map) {
    console.log(key,':',Value);
}


const myObject ={
    'game1' : "NFS",
    'game2' : "BGMI",
}


// dont work for object
// for (const [key , value] of myObject) {
//     console.log(key,':',Value);

// }
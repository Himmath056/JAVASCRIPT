const myObject ={
    js :"Javascript",
    cpp : "C++",
    rb :"Ruby",
    swift :"Swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


// array
const programming =["js","rb","cpp","swift"]

for (const key in programming) {
    // console.log(`${key}  position has ${programming[key]}`);
}


// Map cannot be iterate by forin

// const map = new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United states of America")
// map.set('FR',"France")
// map.set('IN',"INDIA")

// for (const key in map) {
//     console.log(key);
    
// }
const name ="himmath-kumar-com"
const repoCount =50

console.log(name + repoCount + "Value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation


const gameName = new String('HimmathK')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString)

const newString1 ="   himmath   "
console.log(newString1)
console.log(newString1.trim())


const url ="https:/himmath.com/himmath%20kumar"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(name.split('-'))


//explore strings on MDN 
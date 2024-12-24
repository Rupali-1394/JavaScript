const myObj ={
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by apple"
}
// we can use for in loops for objects
for (const key in myObj) {
    //console.log(`${key} shortcut is for ${myObj[key]}`);
}

// array 
const programming = ['cpp', 'rb','js','java','py']
for (const key in programming) {
   // console.log(key);// this gives you the key that is the index
    //console.log(`${key} -> ${programming[key]}`);
}
const map = new Map()// stores unique key value pair
map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("SW", "SWITZERLAND")
map.set("FR", "FRANCE")

// in map forIn not works
// for (const key in map) {
//     console.log(key); 
// }
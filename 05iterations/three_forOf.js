// for of 
const arr = [4,1,5,6]
for (const num of arr) {
    //console.log(num);
}
const greetings = "Hello World!"
for (const greet of greetings) {
    if ( greet == " ") continue;
    //console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map()// stores unique key value pair
map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("SW", "SWITZERLAND")
map.set("FR", "FRANCE")

//console.log(map);

for( const [key , value] of map){
    //console.log(key, ':-', value);
}

const myObj = {
    'game' : "kgf",
    'show' : "evening"
}
// for (const [key, value] of myObj) {
//     //console.log(key , ':-', value);
//     //TypeError: myObj is not iterable
// }

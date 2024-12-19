/*// Primitive-all primitive are passed by value
7 types : String, Number , Boolean, null, Symbol, BigInt


//Reference type (Non-Primitive)
Arrays, Objects, Functions 

// here in js there is no int nd float everything is a number


*/

const score=100; // dataTypes initially was undefined
let userEmail; // variable

// defineing a symbol
const id =Symbol('@#');
const id2 = Symbol('@#');
// both are different 
// lets check if same?
//console.log(id === id2);

// bigInt just add n at last with the number
const bigNumber = 46546564584765245563464n;
console.log(typeof(bigNumber));

// array
const heros = ["Ironman" , "SpiderMan", "loki", "thor"];
// string
//object --> curly braces k andar jo v h
let Omymy={
    name: "Rupali",
    age : 20,
}

//functions
const myfunc = function(){
    console.log( "Hello World");
};

//let's know there datatypes using typeof
console.log(typeof(null));
console.log(typeof(Omymy));
console.log(typeof(heros));
console.log(typeof(array));// undefined
myfunc();
console.log(typeof(myfunc));

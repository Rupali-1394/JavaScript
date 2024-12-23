// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // yeh ek named iife h
    console.log(`DB connected`);
})();// do use a semicolon to end this program

//() execution of function so in iife u just got to put the function inside a paranthesis and also add a paranthesis for execution of the program 

// what is iffe => global scope k pollution se problem hoti h kayi baar toh to remove those problems and pollutions we use iffe

// even works in arrow function
((name)=>{
    // yeh simply ek iife h
    console.log(`Hello World ${name}`);
    
})('Rupali');
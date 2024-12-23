let a = 300;
if(true){
    let a = 100;
    const b = 200;
    console.log("Inner : ",a);
    //var c =300;// prevent using var as it ha a global scope
}
// a and b ka scope block m hi h bus
console.log("Outer a : ",a);


// scope of a browser and node is differnet
// closure 
// scope is sama as cpp

/*++++++++++++++++++ two types of func declaration +++++++++++++++*/
console.log(addone(5));

// we can even declare function after the function call when we declare like this
function addone(num1){
    return num1+1;
}


addTwo(5)//ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num1){
    return num1 +2;
}


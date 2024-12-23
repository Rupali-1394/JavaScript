const user ={
    username : "RUpali",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username}, welcome to website`);// here since hum object k andar h toh uske andar element ko acess karne k liye hum //this. keyword ka use karte h //// that is accessing the current context
        console.log(this);
    }
    
}
// user.welcomeMsg()
// user.username = "Sonali"// u have changed the context
// user.welcomeMsg()

// "this" simply refers the current contex, means jis scope m h apne scope ka

// when we see in the browser we see that this refers to the windows cause browser k pass jo global object h woh windows h 
console.log(this);// yaha {} an empty object

// function chai(){
//     username: "Rupali"
//     console.log(this.username);// this don't works in functions it's only works in objects
    
// }

// chai()// yeh toh bahut kuch print karta h

// const chai = function(){
//     username : "RUpali",
//     console.log(this.username);
    
// }
// chai() // this also gives the sam output


/*+++++Arrow function++++++*/
const chai = () =>{
    username : "Rupali",
    console.log(this.username);// still undefined
    
}
// chai()

// explicit return
const addTwo = (num1 , num2) =>{
    return num1 +num2
}
console.log(addTwo(5, 8));

// implicit function => isme sir ek line ka code rehta h
const DiffernceTwo = (num1, num2) => (num1 - num2)
console.log(DiffernceTwo(8, 6));

// if we want to return an object we have to use implicit arrow function
const myName = () => ( {username: "Rupali"})
console.log(myName());

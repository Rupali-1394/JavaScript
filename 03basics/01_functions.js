function greet(){
    console.log("R");
    console.log("U");
    console.log("P");
    console.log("A");
    console.log("L");
    console.log("I");
}
// function name(){
//} this the function declaration
greet(); // here just greet is refernece to the function and greet() is function call

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(4,8);// problem when anyone or both are not numbers then we will check from if else condition 

// inputs in a function is knoe as parameters and when we pass value to a function during a function call it is known as arguments

// so since their is no return statement in the function then we can't store the value to store the value , we need to return something from the function

function subtractPain(number1 , number2){
    // let result = number1- number2;
    // return result;
    return number1 + number2
}
// after return statement no further function will work
const ans = subtractPain(3,5);
// console.log(ans);

function loginUserMsg(username = "Sammy"/* by default works when nothing passed*/){
    if(username === undefined){
        console.log("please a username");
        return
    }
    return  `${username} just logged in!`
}
let ans2 = loginUserMsg("Rupali")
console.log(ans2);
// what if we pass an empty string 
console.log(loginUserMsg(""))
// and we pass nothing
console.log(loginUserMsg())// undefined logged in

// lets make a crat price calculator for amazon 
function CalculateCartPrice(...num1){// this is called rest operator here ... name depends on usage this will make an array of the parameters 
    return num1
}
console.log(CalculateCartPrice(100,200,451,125));

// we can even pass objects
const user={
    name : "Rupali",
    price : 120
}

function handleOject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
//problems coms when object is distorted so we do use if else statements
handleOject(user);
// hum directly ab function call m hi bana k bhejenge
handleOject({
    username :"Vivek",
    price : 173
})

const myNewArray = [100,400,200,800]

function returnSecondValue(getArray){
    return getArray[1]// return the second a value
}

console.log(returnSecondValue(myNewArray));
//singleton objects
// we can declare objects in two ways either as contructor or  as literal
// so when use constructor then always singleton is formed
// object.create();// constructor
// object literals
const mysym = Symbol("@Rup1394");

const JsUser = {
    name : "Rupali",// name is stored as string
    "full name":"RUpali Kumari",
    [mysym] : "@Rup1394",// this is the correct way to declare a symbol
    age : 19,
    location : "Ranchi",
    email : "mrupali1394@gmail.com",
    isLoggedIn : false
}

// //now accessing the elements
// console.log(JsUser.email)
// console.log(JsUser["email"]);// 2 ways (. and "")to access this use either of the way
// console.log(JsUser["full name"]);// isko aise hi access kar sakte h kiuki already yeh as string hi declare
// console.log(JsUser.Symbol);
// console.log(typeof JsUser.Symbol);// gives string when declred like Symbol : " @Rup1394"

console.log(typeof mysym);// 

// how to change the vales of object
JsUser.email = " sona@gmail.com"

//Object.freeze(JsUser)// this freezes the object hence u can't change the value of any object variables

JsUser.email = "ruu1394@gmail.com";// this change will not propagate
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js Users")
}
// console.log(JsUser.greeting); 
// console.log(JsUser.greeting()); // along with undefined as output? why? 

// to take the refernece of the object in an function
JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`) // this is used to access within an function
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


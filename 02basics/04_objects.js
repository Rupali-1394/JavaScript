//const tinderUser = new Object()
const tinderUser = {} //1 and 2 are same empty object declares ho rhi h///// only difference is 1 is singleton object and 2 is not

tinderUser.id = "123abs"
tinderUser.name = "jamm"
tinderUser.isloggedin ="false"

//console.log(tinderUser);

// nested objects
const regularUser = {
    email : "some@123.gmail.com",
    fullname : {
        userfullname : {
            firstname : "Rupali ",
            lastname : "Kumari"
        }
    }
}

//console.log(regularUser)
//console.log(regularUser.fullname.userfullname.firstname); // here fullname? this is used for making sure if fullname exist then go further

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "c", 4 : "d"}
const obj3 = { 5 : "e", 6 : "f"}

const obj4 = {obj1 , obj2}// object k andar bus objects aajayenge
//console.log(obj5);

const obj5 = Object.assign({}, obj1, obj2, obj3)
//console.log(obj5); // isme {} is liye dia h taki ek empty target k andar baki ka data copy ho 
// agar hum {} na de then obj1(as target treat hoga) k andar baki sab merge ho jayenge to {} as a target object use kia gya h 


const Obj = {...obj1 , ...obj2, ...obj3} // here spread as an object {} is used and n array spread as array is used []
// console.log(Obj);

// now when the data comes from a database it comes as array of objects 
const users = [
    {
       id : 1,
       email : "123@microsoft.com" 
    },
    {
        id : 2
    },
    {
        id : 3
    }
]

//console.log(users[0].email)

// important thing
console.log(Object.keys(tinderUser)) // comes output as array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));//array k andar array as key values

console.log(tinderUser.hasOwnProperty('name')); // boolean output

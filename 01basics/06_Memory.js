/*
stacks is used in primitive types
*/
// stack (primitive)

// Heap (Non- Primitive)

let myname="Rupali Kumari";

let anotherName = myname; //  only copy will pass
anotherName = "Divya Kumari";

console.log(myname);
console.log(anotherName);

// object is a reference type
let user1 = {
    email : "srvl@gmail.com",
    upi   : "user1@ybl"
}

let user2 = user1;
user2.email = "rupali1394@gmail.com";

console.log(user1.email);
console.log(user2.email);
// in the  second part the email got changed even in the original function as well because functions are passed by refernece
// as it is passed by reference 
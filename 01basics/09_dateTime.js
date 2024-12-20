let myDate= new Date()
// date is an object
// console.log(myDate);//2024-11-16T14:30:15.508Z
// console.log(myDate.toString());//Sat Nov 16 2024 20:01:32 GMT+0530 (India Standard Time) 
// console.log(myDate.toDateString());//Sun Nov 17 2024 
// console.log(myDate.toISOString());//2024-11-17T03:26:42.973Z 
// console.log(myDate.toJSON());//2024-11-17T03:26:42.973Z
// console.log(myDate.toLocaleTimeString());//8:56:42 am 
// console.log(myDate.toTimeString());//08:56:42 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString());//Sun, 17 Nov 2024 03:26:42 GMT

let myCreatedDate = new Date(2023, 0, 23);//YYYY , MM, DD month starts from 0 in js
//console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
let myCreatedDate2 = new Date(2023, 0, 23, 12, 12);//YYYY , MM, DD , hr, min, sec
//console.log(myCreatedDate2.toLocaleString());//1/23/2023, 12:12:00 PM

let CreatedDate = new Date("1-12-2024");//mm-dd-yyyy
//console.log(CreatedDate.toLocaleString());


// for any game and quiz if u want to add timestamp for getting the fastest contestant
let startDate = new Date();
//console.log(startDate.toLocaleString());

let myStampTime = Date.now();
//console.log(myStampTime);
//console.log(startDate.getTime());

/* 
ok so we can track the time stamp of any client u=in a website or at hotel by simply starting a stime stamp from the time he entered and then converting into seconds since 1stjan 1970 and also a time stamp at the end of the visit then simply geting the difference pf the two time stamps lemme show u an example
*/

// lets design a time stamp for an contest with a fixed starting time
let InTime = new Date(2024, 11, 19, 8, 5);
let OutTime = new Date();
console.log(InTime.getTime());
console.log(OutTime.getTime());// this will give the time at now from 1970 1st jan in milli seconds

/* client total stay time is*/
//console.log(`The In time of an client is ${InTime} and his out time is ${OutTime} and his total stay is ${Math.floor((OutTime.getTime() - InTime.getTime())/1000)} seconds `);


// noq if only we get to know the month or year or time then dp this 
let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);// starts from 0
console.log(newDate.getDay());


console.log(newDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
}));

const num1 = 100;
//console.log(num1);


// but to keep it more authentic u can declare like this
const num2 = new Number(123);
//console.log(num2);

// some features
// u can convert it to string n then person all the string funtions
//console.log(num2.toString().length);
//console.log(num1.toFixed(2));// used for putting decimal exact to n decimal place

const num3 = 1234.89342;
//console.log(num3.toPrecision(5));// like estimation nearest to for decimal vslues if applicable

//console.log(num3.toExponential(2));



const balance = 100000000;
//console.log(balance.toLocaleString());// used to denote in rupes formate
// by default american standard of money is set 

// indian rupee format
//console.log(balance.toLocaleString('en-IN'));

//********************Maths*********************/
 
// console.log(Math.abs(-23));
// console.log(Math.floor(3.68));
// console.log(Math.ceil(3.2));
// console.log(Math.round(3.52));
// console.log(Math.sqrt(4.5));
// console.log(Math.max(4,8,77));
// console.log(Math.min(4,8,77));


console.log(Math.random());// always gives value between 0 and 1
console.log((Math.random()*10) +1);// we use this in dice game to get no after rolling the dice
console.log(Math.floor(Math.random()*10) +1);// jus to keep the lower number

// now more prominent way to use it that our value should lie between min and max
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1) ) + min )
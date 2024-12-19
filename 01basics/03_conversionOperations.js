/*
let score =" 44bjkj ";

console.log(typeof score);
console.log(score);

let valueInNumber = Number(score);// conversion of string into number
console.log(typeof valueInNumber); // conversion ho jayega but once check the value to make sure it's a number
console.log(valueInNumber);// NaN means not a number as 44bjkj is not a pure number

// what if null
let val =null;
let valConvert = Number(val)
console.log(typeof valConvert);
console.log(valConvert);// 0

// undefined
let abc = undefined;
let valInNumber =Number(abc);
console.log(typeof(valInNumber));
console.log(valInNumber);

*/
// jo convert nhui ho sakta h usme ourput NaN aa jata h

/*
Conversion
"44"=> 44
"34sf"=>NaN
true =>1; false => 0;

*/
/*
// likewise we did in conversion to Number we can do the same for String Bool etc as well 
// let's do it



let isLoggedIn=7765 ;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
conversion to boolean
1=true; 0 =>false;
"" => false; "rup" =>true;

let someNum = 35;
let stringNum = String(someNum);
console.log(stringNum);
console.log(typeof stringNum);

*/
/*
// ***************** Operations ******************* \\
let value = 34;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(54*6);
console.log(45/9);
console.log(100-89);

/// string operations
let str1="Rupali"
let str2="Uday"

let str3= str1+str2;
console.log(str3);

// with no strings
console.log("1" +2);
console.log(1+"2");
console.log("1"+9+7);

console.log(+true);
console.log(true);


console.log(3+(5*3)/2);// float vale 10.5
console.log((3+4*5)+"4"); //it does 234?/ never do thiskind of code


console.log("1"+3+4);// agar string first h then sara string m convert ho jayega
console.log(1+2+"3");// agar string last m h toh pehle jo operations h woh honge fir string hoga

// tricky conversions
console.log(+true);
console.log(+"");//converts to false

let num1, num2, num3;
num1 = num2=num3 =2+2;//not proficient

*/
let gameCounter =100;
gameCounter++; // prefix operator and postfix operator read from mdn increment(++)
console.log(gameCounter);

let x = 3;
const y = x++;
console.log(x,y);

// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
console.log(x2, y2);

// x2 is 4n; y2 is 3n

// let x = 3;
// const y = ++x;
// // x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// // x2 is 4n; y2 is 4n




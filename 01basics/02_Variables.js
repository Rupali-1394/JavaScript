// so the case is any customer has come to our
//website and we are registering him/her into our
// platform so we are performing this
const accountID = 12346;
let accountEmail = "mrupali1394@gmail.com";
var accountPassword ="90893";/* we can use  either var or let but var is not used most often cause avr is not aware of its scope 
in the initial days js had no scope work means uska pura code hi scope tha ek baar agar woh 
khi define ho gya h then agar hum usko for loop ya kisi aur m define karte the for other 
work it takes it as the pehle wala variable

so so use only let;
Prefer not to use var
because of issue in block scope and functional scope

*/
accountCity ="Bokaro";// we can do this but don't do like this
let accountState;
// we can not change the value of const
// accountID = 90; this is not allowed
console.log(accountID);

// lets modify other informations
accountEmail="krsonali33@gmail.com";
accountPassword="5325";
accountCity="Ranchi";
// table formate printing
console.log([accountID,accountEmail,accountPassword,accountCity, accountState]);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);


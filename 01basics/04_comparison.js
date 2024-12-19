// //COmparisons
// console.log( 2 > 1);
// console.log( 2 >= 1);
// console.log( 2 == 1);
// console.log( 2 != 1);

// // above comparison is easy 
// // // it's get difficult when we compare differnt dataTypes
// console.log("2" > 1);
// console.log("2" >= 1);
// console.log("2" == 1);
// console.log("2" != 1);
//  js has changed their data type to int

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);//  null got converted to 0
// /*in js comparison and equality operators work differntly
// >= , <= and
// == , === have  different syntax
// */

// console.log(undefined == 0);
// console.log(undefined <= 0);
// console.log(undefined < 0);
// undefined gives false in all cases

// whenever we check == this do conversion of data types
console.log("31" == 31);

// but when we use === it means strict check
// means it will check the data type and the content
console.log( "31" === 31);
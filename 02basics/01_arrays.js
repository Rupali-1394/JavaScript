const arr1 = [1,2,3,4];
//console.log(arr1[0]);
// 0 based indexing and also there are 2 types of copies
// a. Shallow Copy--> by refernce any changes in the copy is reflected in the originnal array
// b. Deep Copy--> by value 
// here u can define a array with any dataType within one
const arr2 = [ 2 , 4, 3.4, "Rupali", "Sonali",'b'];
//console.log(arr2)

// when u go on inspect and console and define an array then in the drop down u get to see
// some prototypes
//console.log(arr1.length);

/* ++++++++++++++++ ARRAY METHODs ++++++++++++++++++*/

// arr2.push(45) // to add new elements
// console.log(arr2);
// arr2.pop();// deletes the last elements
// console.log(arr2);

// arr2.unshift(23)// adds to the first place and shifts other all data to the right
// arr2.shift() // shift the elements to the left by one place
//console.log(arr2);

// // there is an operation in which u can ask the array whether a particular number is present in the array or not
// console.log(arr2.includes(10));// gives ans in boolean
// console.log(arr2.indexOf(23));// -1 for not exits and index for exits elements


// const newArr = arr2.join();// joins all elements into a string, comma separated
// console.log(newArr);
// console.log(typeof newArr);


/*++++++++++++ Slice and Splice +++++++++++++*/
const Arr = [0,1,2,3,4,5]
console.log("before any operation" , Arr)
const myArr1 = Arr.slice(1,3);
console.log(myArr1);
console.log("A ", Arr );

const myArr2 = Arr.splice(1,3)
console.log(myArr2);
console.log("B ", Arr);

// slice just make a different array without making changes to the original array
// whereas splice mainpulates the original array but actually slice out the elements inclusively from the original array


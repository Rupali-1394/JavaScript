const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNums = myArray.map = myArray.map( (num)=> {return num +10});
// console.log(myNums);

// const myNum2 = [];
// myArray.forEach( (num)=> {
//     myNum2.push(num + 20)
// });
// console.log(myNum2);



/// chaining

const newNums = myArray
                .map( (num)=> num *10)// yeh ab array [10, 20, ...]matlab already array change ho chuka h
                .map( (num)=>num +1)
                .filter( (num)=> num >= 42) 

console.log(newNums);



// const coding = ['cpp','js','python', 'ruby','java']

//suppose t we want to store the values can we do it?

// const value = coding.forEach((item) => {
//     return item;
// });

// console.log(value);// undefined
// // for each loop don't return values

const myNums =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNums.filter( (num)=> num > 4) // this returns values
console.log(newNumbers);
const newNum2 = myNums.filter( (num) => {
    return num >4 ; // return keyword likhna padega agar aap scope pe likh rhe h
} )
console.log(newNum2);

const newNums = [];
myNums.forEach( (num)=>{
    if( num >6){
        newNums.push(num)
    }
})
console.log(newNums);


const myNewArray = [
    {
        title : 'Book one', genre :'science', publish :'1987' , edition : '2004'
    },
    {
        title : 'Book two', genre :' no-friction', publish :'1999' , edition : '2004'
    },
    {
        title : 'Book three', genre :'science', publish :'2004' , edition : '2020'
    },
    {
        title : 'Book four', genre :'nonscience', publish :'2004' , edition : '2025'
    },
    {
        title : 'Book five', genre :'science', publish :'2005' , edition : '2010'
    }
];
myNewArray.forEach( (item)=>{
    //console.log(item.genre);
    
});
let userBooks = myNewArray.filter( (bk) => bk.genre=== 'science' )
userBooks = myNewArray.filter( (bk )=>{ return bk.publish >= 2004})
userBooks = myNewArray.filter( (bk) => bk.genre=== 'science' && bk.publish >=2003 )
console.log(userBooks);


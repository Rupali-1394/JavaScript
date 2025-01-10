const myNumbers = [1, 2, 3, 4, 5];

const myTotal = myNumbers.reduce( function (acc , currVal){
    //console.log(`acc : ${acc} and the currentValue : ${currVal}`);
    return acc +currVal
    
})//If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue.

// console.log(myTotal);
const myCart = [199,249,899, 2499, 399];
const myCartTotalValue = myCart.reduce( function (acc, currVal){
    return acc + currVal ;
})
console.log(myCartTotalValue);

// its arrow function 
const totalValue = myCart.reduce( (acc, currVal)=> {
    return acc + currVal;
})
console.log(totalValue);

const shoppingCart =[
    {
        ItemName : 'AI',
        price : 5999
    },
    {
        ItemName : 'ML',
        price : 4999
    },
    {
        ItemName : "Python",
        price : 2999
    },
    {
        ItemName : "Java",
        price : 3999
    },
    {
        ItemName : " cpp",
        price : 2599
    }
]
const Total = shoppingCart.reduce( (acc, item)=> acc + item.price ,0)
console.log(Total);

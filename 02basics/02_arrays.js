const marvelHeroes = ["thor", "Ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"];

// lets add this two arrays
//marvelHeroes.push(dcHeroes);//simply takes array 2 as an element inout
//console.log(marvelHeroes)

//to merge them we need to concatenate into a new string 
//marvelHeroes.concat(dcHeroes);// this also does the same work as above
// console.log(marvelHeroes[3][1])// is "flash"
//console.log(marvelHeroes);

const newMergedArr= marvelHeroes.concat(dcHeroes)
//console.log(newMergedArr);

// better method which is mostly used is to spread them*************************
const newArr = [...marvelHeroes,...dcHeroes]// and many more at a time
//console.log(newArr);

const anotherArr = [1,2,3,4, [5,6 ,7, [8, 9]], 10, 11,[21,12,32]]
//if we want to get a flat array with no []looping 

const real_anaotherArr = anotherArr.flat(2)//()here we put the times for its depth of flatness
//console.log(real_anaotherArr);

// we can ask if a particular array exist or not
//console.log(Array.isArray("Rupali"))
// we can ask it to make a new array
const Rup = Array.from("Rupali")
//console.log(Rup);
//console.log(Array.from({name : "Rupali"}))// interesting question in an iterview// keys ka array but this gives u an empty array
//Array.from() isn't designed to extract keys or values from plain objects.
//If you want an array of keys or values from an object, use Object.keys() or Object.values()

let score1 = 100;
let score2 = 200;
let score3 = 300;

// we can even make array from variables
const score = Array.of(score1, score2, score3);
console.log(score)
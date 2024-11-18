const name = "Rupali ";
const repoCount = 4;

//  console.log(name + repoCount + " repoCount"); // this is old style

// in modern time this is used
console.log(`Hello my name is ${name} and my repo count is ${repoCount}  `); //this is string INTERPOLLATION
// it helps us to write code on the go

// one more syntax to declare string 
let myName = new String('Divya Kumari');
console.log(myName[0]);// key value
console.log(myName.__proto__);// prototype


console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('i'));
console.log(myName.italics());

// for more detailed info u can simply go to google page and then inspect that page in the console declare any string 
// and then read its detail from the dropdown


const newString = myName.substring(0,4); // start and ending index < it does'nt include the last index
console.log(newString);

const newSlicedString = myName.slice(-12 , 4); // this is also used for maing a substring what's special about it?
// u can even start it from a Negative no in that case it will start 
console.log(newSlicedString);

// trim // when user unknowingly puts so many spaces
const game = new String("    Iron MAn    ")
console.log(game);
console.log(game.trim());

const url = "https://rupali.com/rupali%20kumari" // in between hum kahi space dal dete h toh browser khudse %20 dal dega us gap m

/// to eradicate that we can use replace
console.log(url.replace('%20','-'));
// we can also ask that whether a particular word or letter is present in the url or not
console.log(url.includes('rupali'));
console.log(url.includes('divya'));

// we can split any string with anything in-between that is separator
const hero = new String( 'IronMan-SpiderMan-Loki-Sundar')
console.log(hero.split('',20));


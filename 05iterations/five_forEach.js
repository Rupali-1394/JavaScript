const coding = ['cpp','js','python', 'ruby','java']

coding.forEach( function (item) {
   //  console.log(item);
} )

// from arrow functions
coding.forEach( (item)=> {
   // console.log(item);
})

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (i, index, arr) =>{
    //console.log(i, index, arr);
})

const myCoding = [
    {
        languageName : "Python",
        languagefileName : "py"
    },
    {
        languageName : "Cpp",
        languagefileName : "C++"
    },
    {
        languageName : "javascript",
        languagefileName : "js"
    },
    {
        languageName : "Java",
        languagefileName : "java"
    },
    {
        languageName : "Ruby",
        languagefileName : "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
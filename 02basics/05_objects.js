// Destructuring 
const course = {
    courseName :  "js in hindi",
    price : "999",
    courseInstructor : "Hitesh Choudhary"
}

//course.courseInstructor // suppose u want to print the value of instructor then u have to write course.instructor again and again so to prevent that we can do this
const {courseInstructor : instructor} = course; // this is called as destructor
console.log(instructor);

// this property is used in reactjs

// const navbar = ({company}) =>{

// }
// navbar(company = "Srvl")

// basic json talks
/*++++++++++++++++ Json +++++++++++++++++*/
// // this is proper json structure 
// {
//     "name": "Hitesh",
//     "coursename" : "js in Hindi",
//     "price" : "free"
// }
// // in objects we have their names whereas in json we don't have hower in the later stages we will see that we will store json in variables

// we have seen randomuserapi also we have copy that api and study in json formatter
/*
{"results":[{"gender":"male","name":{"title":"Mr","first":"Prvoslav","last":"Polić"},"location":{"street":{"number":3365,"name":"Vojislava Lubarde "},"city":"Trstenik","state":"Pčinja","country":"Serbia","postcode":31544,"coordinates":{"latitude":"56.1161","longitude":"-39.9174"},"timezone":{"offset":"-3:00","description":"Brazil, Buenos Aires, Georgetown"}},"email":"prvoslav.polic@example.com","login":{"uuid":"a855eda3-6b0b-4e3f-85e5-7654e928680a","username":"whitegoose507","password":"emerson","salt":"xScT4n0d","md5":"58eb05919b7ce3199b16524ac9202b57","sha1":"d26daf0b7c1214e33b085e8e8ea4c4d82a606eec","sha256":"46c798ef3055644523400cd0baf1da1bd62cf513949e0374fc34cd4e72eb8494"},"dob":{"date":"1967-04-27T05:55:16.008Z","age":57},"registered":{"date":"2008-10-05T03:30:55.087Z","age":16},"phone":"035-1535-068","cell":"067-5104-895","id":{"name":"SID","value":"994080767"},"picture":{"large":"https://randomuser.me/api/portraits/men/28.jpg","medium":"https://randomuser.me/api/portraits/med/men/28.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/28.jpg"},"nat":"RS"}],"info":{"seed":"db392fb8d5ffbc2d","results":1,"page":1,"version":"1.4"}}

*/

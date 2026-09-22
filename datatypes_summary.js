// kis tarah data ko memory me rkha jata hai aur excess kiya jata h ,uss basis pr 2 type me catagorise kiya gya h
// #Primitive datatypes : is call  by value
// 7 catagorises : String , Number , Boolean, null , undefined , Symbol - to make value unique, BigInt - large numbers such as scientific numbers

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 1847594759027935873482n  //bigInt



// javaScript me language  ko define nhi krte and JS is dynamically typed Language


// #Non-Primitive or reference : is call by reference

// Array , Objects , Funtions

const heros = ["shaktiman","nagraj","doga"]  //array

let myObj = {
    name : "Suraj",
    age: 20,
}  //object

const myFunction = function(){
    console.log("Hello World");
    
}  //function

console.log(typeof bigNumber);  //BigInt
console.log(typeof outsideTemp);  //object 
// for non primitive typeof is object ,for function it is object function


console.log(typeof anotherId); // Symbol
console.log(typeof scoreValue); //number
console.log(typeof myFunction);//function
console.log(typeof heros); //object
console.log(typeof myObj);//object
console.log(typeof score);//number
console.log(typeof isLoggedIn);//boolean
//https://262.ecma-international.org/5.1/#sec-11.4.3
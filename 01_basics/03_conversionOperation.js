let score = true

//console.log(typeof score);
// console.log(typeof (score));
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//NaN => not a number
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// "Suraj" => NaN
let isLoggedIn = "Suraj"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1 =>true; 0 => false
//"" => false; "Suraj" => true

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);




//***************************************************Operations*************************************** */

let value = 3
let negValue = -value
//console.log(negValue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%2); */


str1 = "Hello"
str2 = " Suraj"

str3 = str1 + str2
//console.log(str3);

/*
console.log("1" +2);
console.log(1 + "2");
console.log( 1 + 2 + "2");
console.log("1" + 2 + 2);
// read on tc39 abstract operation/type conversion
console.log(1 + 2 * 4 % 6 ); */

//avoid writing in such way and use more paranthesis

//console.log(+true);  // output will be one and avoid writing such confusion code
//console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // confusion code,not good for industrial applications

let gameCounter = 100;
gameCounter++;         // study prefix and postfix from mdn and what changes does it make
console.log(gameCounter);
// link to study 
//https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-type-conversion














/* console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2 == 1);
console.log(2 != 1); */

//console.log("2" > 1);
//console.log("02" > 1);
// it gives right value because it automatically converts string into number but it is  not right method so avoid comparing 2 different datatypes
// in typescript there is rule that two different datatypes should not be compared 



console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

// reason : equality check == and comparisions <,>,>=,<= work differently.
// comparision converts null to a number that is 0 thats why above results are obtained.
console.log(undefined == 0);  //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false
// we should avoid such comparisions




// strict check  ===

console.log("2" === 2);  //false because datatypes are different and "2" will not be converted into number and remains string



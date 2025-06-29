console.log(1 > 2); //false;
console.log(1 >= 1); //true;
console.log(2 >= 1); //true
console.log(2 == 2); //true
console.log(2 != 1); //true

console.log("2" > 1); //2 is automatically converted into number --> true
console.log("02" > 1); //true

//Always try to keep the data types same when comparing them -- don't compare two different data types

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true --> Here the value gets converted

//The reason is that an equality check == and comparisons > < >= <= work differently. 
//Comparisons convert null to a number, treating it as zero.
//That's why null >= 0 is true but null == 0 is false, and null > 0 is false

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0); //false

console.log("2" == 2); //true --> checks the values only
console.log("2" === 2); //false --> triple equals === checks for the data type as well


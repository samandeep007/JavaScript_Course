const score = 400; //Js implicitly knows that it is a number
console.log(score); //prints 400
console.log(typeof score);

const balance = new Number(400); //Explicitly defining a number;
console.log(balance);
console.log(typeof balance); //using the constructor method of the Number class, makes it an object

//use number.toString() for converting numbers, while use String(number) for general conversion

console.log(balance.toString()); //Will convert it to string
console.log(typeof balance.toString()); //It is a string object now, and I can access all the properties and methods available to String class

console.log(balance.toFixed(2)); //set the precision to two decimal places, it will automatically round off

console.log(balance.toString().length); //Gives the length of the string or the number of digits in the number

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); //returns a string --> 23.9 | Precision to the digits, not the decimal places (significant digits)

console.log(otherNumber.toFixed(3)); //123.897 --> Priority to the decimal places

const hundreds = 100000;
console.log(hundreds.toLocaleString()); //Add commas using US standards by default

console.log(hundreds.toLocaleString('en-IN')); //commas according to Indian number system.

//For DSA

console.log(Number.MAX_VALUE); //Max value of the number
console.log(Number.MIN_VALUE); //Min value of the number


// *************************** Maths ***************************

//This library comes by default with JavaScript
console.log(Math); //Math is an object itself and you can use it's methods by passing in the numbers as parameters

console.log(Math.abs(-212)); //returns the absolute value | minus to plus

console.log(Math.floor(12.9)); //Returns the greatest integer less than or equal to its numeric argument. --> 12

console.log(Math.round(12.9)); //Returns the nearest integer value --> 13

console.log(Math.ceil(12.4)); //Returns the greatest integer more than or equal to its numeric argument. --> 13

console.log(Math.PI); //returns the value of PI

console.log(Math.pow(2, 4)) //Takes base and exponents and returns the calculated result

console.log(Math.sqrt(4)) //Returns the square root of a number

console.log(Math.max(1, 2, 3, 4)); //returns the max number

console.log(Math.min(23, 4, 32, 11)); //returns the min number

console.log(Math.random()); //Returns a random number between 0 and 1

//To generate numbers between a range
console.log((Math.random() * 10 + 1).toFixed(0)); // add 1 to avoid 0.0 condition and precise it to 0 decimal places

console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

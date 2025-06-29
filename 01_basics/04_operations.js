let value = 3;
let negValue = -value; //Assigning the negative value 

console.log(negValue); //-3

console.log(2 + 2); //Addition
console.log(2 - 2); //Subtraction
console.log(2 * 2); //Multiplication
console.log(2 ** 3); //Exponent
console.log(2 / 2); //Division
console.log(2 % 2); //Modulus

let str1 = "hello";
let str2 = " Samandeep";
let str3 = str1 + str2; //string concatenation

console.log(str3); //Displays hello Samandeep

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32 --> First primitive is taken into consideration

console.log((3 + 4) * 5 % 2); //Use parenthesis to improve the readability
console.log(+true); //true --> + converts boolean to number

console.log(typeof +"1"); //Tricky conversion to number using plus operator

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; //Readability sucks here

console.log(num1);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

console.log(gameCounter++); //101 //Use the value and then increase it
console.log(gameCounter); //102
console.log(++gameCounter); //103 //Increase the value before usage


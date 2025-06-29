let score = "33";

// const {score} = req.body; We don't know the type of the value received
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) //Wrapper class
console.log(typeof valueInNumber); //displays number

let age = "23ac";
let ageInNumber = Number(age);
console.log(typeof ageInNumber); //displays number
console.log(ageInNumber); //NaN --> Not a number

let num = null;
console.log(Number(num)); //0
console.log(Number(undefined)); //NaN
console.log(Number("Samandeep")); //NaN

let isLoggedIn = true;
console.log(Number(isLoggedIn)); //1

let isEligible = 1;
console.log(Boolean(isEligible)); //true

let canDrive = "";
console.log(Boolean(canDrive)); //false

let isYounger = "Samandeep";
console.log(Boolean(isYounger)); //true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); 
console.log(typeof stringNumber); //string
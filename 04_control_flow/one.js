// if statement

// if(condition){
//     //block of code to be executed if condition is true
// }

//example condition: 2 == 2

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("Welcome to the site")
}

// <, >, >=, <=, ==, !-, ===

// == is equal to operator, while = is assignment operator
// 3!=2 --> true
// 2 === "2" --> false, because === compares the data type as well

if (2 === "2") { //condition is falsy
    console.log("Executed");
}

if (2 !== "2") {
    console.log("Executed");
}

const temperature = 41;

if (temperature < 50) {
    console.log("temperature is less than fifty")
} else {
    console.log("temperature is greater than fifty"); //Will be executed no matter what, it is outside the conditional
}

//using ternary operator (condition) ? true code : false code
// temperature < 50 ? console.log("less than fifty") : console.log("temperature is greater than fifty");

const score = 200;

if (score > 100) {
    // var power = "fly" //should not be outside the scope
    let power = "fly"
    console.log("User power: " + power);
} else {
    console.log("User power: " + power); //power is not defined here, because it is outside the if scope
}



//shorthand notation
const balance = 1000;
// if (balance > 500) console.log("test"); //implicit scope --> in the same line
// if(balance > 500) console.log("test"), console.log("test2"); //separate multiple statements using comma

if (balance < 500) {
    console.log("balance less than 500");
} else if (balance < 750) {
    console.log("balance less than 750");
} else if (balance < 900) {
    console.log("balance less than 900");
} else {
    console.log("balance less than 1200");
}

const userLoggedin = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const guestUser = false;

//checking multiple conditions
if(userLoggedin && debitCard && 2 == 3){
    console.log("Allow to buy courses");
} 

if(loggedInFromGoogle || loggedInFromEmail || guestUser){
    console.log("User logged in");
}
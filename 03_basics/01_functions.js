//function --> packaging a block of code to make it reusable

function sayMyName() {
    //block of code
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName; --> This is reference
// sayMyName(); //function call

function addTwoNumbers(numOne, numTwo) { //numOne and numTwo are parameters here in function definition
    // if (numOne instanceof Number && numTwo instanceof Number) {
    // let result = numOne + numTwo;
    // return result; //No statement executes after the return statement
    return numOne + numTwo;
    // }
    // else {
    //     return -1;
    // }
}

let numOne = 10;
let numTwo = 12;

console.log(addTwoNumbers(numOne, numTwo)); //numOne and numTwo are arguments here

const result = addTwoNumbers(numOne, numTwo); //for this function should return a defined value like number, string, or boolean

console.log("Result: ", result);

function loginUserMessage(username = "john"){ //we have given a default value
    if(!username){ //if username is not given
        return "Please enter username"
    } else {
        return `${username} just logged in`
    }
}

// loginUserMessage("samandeep0792"); //value is returned, but it won't be visible --> you can console.log() it or you can store it in a variable
console.log(loginUserMessage("samandeep0792"));
console.log(loginUserMessage()); //undefined just logged in --> Please enter username 
// undefined is a falsy value

console.log(loginUserMessage("tarandeep97"))

//falsy values: null, 0, undefined, false, NaN
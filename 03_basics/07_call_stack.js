//How does javascript execute code and call stack ?

// JavaScript Execution context --> How javascript will run/execute your file

// Step 1: create global execution context {} --> this
// Remember: JavaScript is single threaded language

// We have Global Execution Context, Function Execution Context and Eval Execution Context (we will see this later --> property of GCE)

// Step 1 is divided into two phases --> Memory creation phase / creation phase | Execution phase

// just memory is allocated in memory creation phase, but it is not executed

let val1 = 10;
let val2 = 5;

function addNum(numOne, numTwo){
    let total = numOne + numTwo;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10,2);


// Step 2: Memory creation phase --> First cycle
// val1 --> undefined, val2 --> undefined, addNum --> definition, result1 --> undefined, result2 --> undefined

 // Step 3: Execution phase

// val1 = 10, val2 = 5, addNum = own execution context (new variable environment (sandbox) + execution thread) --> We will do memory phase and execution phase again for the function call

//AddNum

//Memory phase --> numOne = undefined, numTwo = undefined, total = undefined

//Execution context --> numOne = 10, numTwo = 5, total = 15 (will be returned to global execution context or parent execution context) --> Delete sandbox

//Step 3 continued --> val1 = 10, val2 = 5, addNum = 15, addNum = again the same process

//Memory phase --> numOne = undefined, numTwo = undefined, total = undefined

//Execution context --> numOne = 10, numTwo = 2, total = 12 (will be returned to global execution context or parent execution context) --> Delete sandbox

//Step 3 continued --> val1 = 10, val2 = 5, addNum = 15, addNum = 12


// [NVE + Thread] --> Memory Phase --> Execution context

//Call Stack --> Like Stack of plates --> LIFO

// [Global Execution Context][function 1][nestedFunction] --> [Global Execution Context][function 1] --> [Global Execution Context]

//can be seen in source snippets in browser
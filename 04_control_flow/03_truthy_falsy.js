// const userEmail = "admin@3suniverse.com";
const userEmail = [];

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Didn't get user email");
}

// falsy values: false, 0, null, undefined, -0, 0n, NaN, ""
// truthy values: Non-empty strings, "0", non-zero numbers, objects, arrays, infinity, function(){}


if (userEmail.length !== 0) {
    console.log("Array is empty")
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Logical Operators: && --> Both the conditions should be true 
//   || --> One of the conditions should be true

//Nullish coalescing Operator ??: null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10; //assigns 10 to val1 --> For safety

// The `??` (nullish coalescing operator) returns the right-hand value if the left-hand value is null or undefined.

// val1 = undefined ?? 15;
val1 = null ?? undefined ?? 10

console.log(val1);

// Ternary operator and nco are different

// (condition) ? true : false 

const age = 15;
const canDrive = age >= 18 ? true : false;

console.log(canDrive);
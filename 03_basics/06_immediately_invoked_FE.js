// Immediately Invoked Function Expression (IIFE)

// function chai() {
//     console.log("DB connected");
// }

// chai();

//IIFE is used to prevent global scope pollution


//named IIFE 
(function chai() {
    console.log("DB connected");
})(); //()() --> semicolon is important here to end the scope

// Semicolon prevents syntax errors by separating the IIFE from previous code.

// IIFE (Immediately Invoked Function Expression): A function that runs immediately after being defined.
((name) => {
    console.log("This is an IIFE! ", name);
})("Samandeep");

//It is very similar to console.log() console.log()

//A semicolon separates two IIFEs, ensuring the parser treats them as distinct expressions. Without it, they might be misinterpreted, leading to errors.
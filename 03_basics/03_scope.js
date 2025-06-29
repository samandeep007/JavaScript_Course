// var c = 300;
let c = 300; //Global Scope

if (true) {
    //this is called block scope --> curly braces
    let a = 10;
    const b = 20;
    // var c = 30; //you redeclared and reinitialized c;
    let c = 30; //Now, it is available within the conditional only, and doesn't mess with the variable c in the global scope
    console.log("INNER c: ", c);

    //a,b,c should be available within the conditional scope only
}


// console.log(a); --> available within the scope only --> raises error
// console.log(b);
// console.log(c); //c should not have been available here. --> It should have been 300 here
console.log("OUTER c: ", c) //300 here

// global scope is different in node and browser
// In Node.js, the global scope is `global`. In browsers, it's `window` or `globalThis`.

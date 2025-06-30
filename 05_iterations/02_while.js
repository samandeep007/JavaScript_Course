// while loop

/*
Pseudocode for a while loop
INITIALIZE condition

WHILE (condition is true)
    // Code to execute repeatedly
    UPDATE condition
END WHILE

 */

let index = 0 //initialize the condition

while (index <= 10) { //check the condition
    console.log(`Value of index is ${index}`); //block of code to be executed
    index += 2; //update the condition
}

console.log("\n")

let myArr = ["flash", "batman", 'superman'];

let currentIndex = 0;

while (currentIndex < myArr.length) {
    console.log(`Value is ${myArr[currentIndex]}`);
    currentIndex++;
}

//do-while loop -> exit controlled loop | Will be executed atleast one
/*
// Pseudocode for a do-while loop
INITIALIZE condition

DO
    // Code to execute at least once
    UPDATE condition
WHILE (condition is true)

 */

let score = 1;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score < 10)
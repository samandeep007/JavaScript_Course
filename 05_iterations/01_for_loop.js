//for loop

// Pseudocode for a for loop
// FOR (initialize counter; condition to check; update counter)
//     // Code to execute for each iteration
// END FOR


for (let i = 0; i < 10; i++) {
    const element = i + 1;
    if (element === 5) {
        console.log("five is best number");
    }
    console.log(element);
    //execution control will go to updator
}

//Printing the multiplication tables from 2 to 10

for (let i = 2; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
        console.log(i + ' * ' + j + " = " + i * j);
    }
    console.log('\n');
}

const myArr = ["flash", "batman", "superman"];

//Printing the array elements
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

myArr.forEach((element, index) => console.log(`${index}: ${element}`));


// break and continue

// break --> end the loop | continue --> skip the iteration

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5")
        break;
    } else if (i == 2) {
        console.log("Skipped 2")
        continue
    } else {
        console.log(`Value of i is ${i}`)
    }
}
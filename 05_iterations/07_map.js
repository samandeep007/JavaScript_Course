const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Map method

const newNums = myNums.map((element) => element + 10); //returns a new array after performing function on each element 

//method chaining --> return value of one method is passed to another

const numbers = myNums
                .map((element) => element * 10)
                .map((element) => element + 1)
                .filter((element) => element % 3 == 0);

// console.log(newNums);
console.log(numbers);


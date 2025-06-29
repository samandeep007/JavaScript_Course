// array

// Common JavaScript Array Methods:
// - push(): Adds one or more elements to the end of an array.
// - pop(): Removes and returns the last element of an array.
// - shift(): Removes and returns the first element of an array.
// - unshift(): Adds one or more elements to the beginning of an array.
// - slice(): Returns a shallow copy of a portion of an array.
// - splice(): Adds/removes elements at a specified index.
// - map(): Creates a new array by applying a function to each element.
// - filter(): Creates a new array with elements that satisfy a condition.
// - reduce(): Reduces the array to a single value by applying a function.
// - forEach(): Iterates through an array, executing a function for each element.
// - find(): Returns the first element that satisfies a condition.
// - findIndex(): Returns the index of the first element that satisfies a condition.
// - includes(): Checks if an array contains a specific value.
// - indexOf(): Returns the first index of a specified value, or -1 if not found.
// - join(): Joins all array elements into a string with a separator.
// - reverse(): Reverses the array in place.
// - sort(): Sorts the array in place (default is lexicographic order).


//[] -> Square Brackets, {} -> Braces, () -> Parenthesis
const myArr = [0, 1, 2, 3, 4, 5]; //The members of the array are called elements of the array

// Array -> storing a collection of multiple items under a single variable name
console.log(myArr[0]) //The indexing of array starts from zero, and you can access each of the elements using its index value

//We cannot access the array elements using strings
// console.log(myArr['one']) //not possible

// index = position - 1

// Array copy operations do shallow copy --> changes in the copy will be reflected in the original array

//Another way of declaring array

const myHeroes = ["shaktiman", "Naagraj"];

const myArr2 = new Array(10, 20, 38, 21) //no need to add square brackets

console.log(myArr2); //Array has nested prototypes
console.log(myHeroes);

console.log(myHeroes[1]);

// Array Methods

// const myArr = [0, 1, 2, 3, 4, 5]; 

myArr.push(12); //adds value to the end of the array --> changes the original array
console.log(myArr);

myArr.pop(); //removes the last element from the array
console.log(myArr);

myArr.unshift(9); //adds value to the start of the array --> All the values were shift --> NOT RECOMMENDED
console.log(myArr);

myArr.shift() //removes the first element from the array --> NOT RECOMMENDED
console.log(myArr);

//Questionaire methods in Array
console.log(myArr.includes(9)); //Checks if the elements exists in the array or not

console.log(myArr.indexOf(3)); //Returns the index of a specific element

// console.log(myArr.splice(0,3)); //Returns an array without changing the original one, end index excluded

console.log(myArr.length); //returns the length of the array --> total number of elements

const newArr = myArr.join(", "); //Returns a string separated by the specified separator

console.log(newArr);

console.log(typeof myArr); //object
console.log(typeof newArr); //string

//slice or splice

//slice
console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3) //last one is not included --> Original array is not changed here
console.log(myn1);

console.log("B ", myArr); 

//Both the console logs A and B print the same array

console.log("C ", myArr); 
//Splice change the original array
const myn2 = myArr.splice(1,3); //A section of the elements between the range are removed including the end index
console.log("D ", myArr); 
console.log(myn2);

//Remember: Slice doesn't change the original array, while splice manipulates the original one. Slice doesn't include the end index, while splice includes it


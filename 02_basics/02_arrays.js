// Arrays (continued)

const marvel_heroes = ["thor", "Ironman", "spiderman"];

const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes); 

console.log(marvel_heroes) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//Arrays get nested in such cases forming a 2D array.
//Arrays are dynamic in javascript and can have elements of any type including Array object itself;


marvel_heroes.concat(dc_heroes); //Doesn't manipulate the original array and returns a new array
console.log(marvel_heroes); //marvel_heroes array is same as before

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator --> Glass breaks and spreads into pieces --> Array breaks into elements
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_another_array); //Elements spread out into one flat array, no sub-arrays

Array.isArray("hitesh"); //Check if something is an array or not?

console.log(Array.isArray("hitesh"))

console.log(Array.from("hitesh")); //Make array from string

console.log(Array.from({name: "Hitesh"})); //Array from object --> Empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) //Returns a new array from a set of elements. --> [ 100, 200, 300 ]


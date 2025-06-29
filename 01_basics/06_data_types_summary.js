// Based on how data is stored and accessed in the memory, data types are divided into two categories;

// Primitive 
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt (for scientific values)

const score = 100; //Need not to define the data type, so it is dynamically typed language
// TypeScript is statically typed and doesn't allow the variable declaration without specifying the data type
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null; //empty
let userEmail; //undefined or let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123'); //id and anotherId is different

console.log(id === anotherId); //false

const bigNumber = 13232163781231232312312312n; //n specifies it as a bigint
console.log(typeof bigNumber) //bigInt

//Reference (Non primitive)

//Array, Objects, Functions

const heroes = ["Spiderman", "Superman", "Shaktiman"];
console.table(heroes);

const myDetails = {
    name: "samandeep",
    age: 22
}

console.log(myDetails.name);

const { name, age } = myDetails;
console.log(name);

const myFunction = function sayHello() {
    console.log("Good morning buddy");
}

myFunction();
console.log(typeof myFunction) //function --> It is called object function

console.log(typeof heroes); //The data type of array is also object

//typeof null is always an object
// typeof null incorrectly returns "object" because of a historical mistake, not because null is actually an object.
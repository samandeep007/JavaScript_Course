const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
};


//// for..in: Iterates over enumerable properties (keys) of an object or indices of an Array.

//using for..in in OBJECTS
for (const key in myObj) { //iterates over the object keys
    console.log(`${key} shortcut is for ${myObj[key]}`);
}


//using for..in in ARRAYS
const programming = ["js", "rb", "py", "cpp", "java"];

for (const index in programming) {
    console.log(`The element at ${index} is ${programming[index]}`)
}


//using for..in in MAP

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America")
map.set("FR", "France");
map.set("IN", "India"); //This won't be added again

//for..in iterates only on enumerable properties. Maps don't have enums, so it is not possible to use for..in in maps

for (const key in map) {
    console.log(`${key} stands for ${map.get(key)}`);
}
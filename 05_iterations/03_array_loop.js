// for of loop --> to iterate over the VALUES in array

const nums = [1, 2, 3, 4, 5, 6];

//For..of : Access each element, not index

for (let num of nums) {
    console.log(`The number is ${num}`); // Directly access each element
}

//For..in : Access each index of the array, not element values

for(let index in nums){
    console.log(`The number at ${index} is ${nums[index]}`);
}

const greeting = "Hello world";

for(const char of greeting){
    if(char==" "){
        continue;
    }
    console.log(`Each char is ${char}`);
}

//MAPS : contain unique key-value pairs

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America")
map.set("FR", "France");
map.set("IN", "India"); //This won't be added again

console.log(map)

for(const [key, value] of map){ //destructuring of array
    console.log(key, ":", value);
}

//OBJECTS

const myObj = {
    "Game1": "Need for Speed",
    "Game2":  "Spiderman"
}

for(const [key, value] of Object.entries(myObj)){ //Object is not iterable on its own --> Make it an array
     console.log(key, ":", value);
}
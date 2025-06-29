const name = "Samandeep Singh";
const repoCount = 50;

console.log(name + " " + repoCount); //One way to concatentate

//String interpolation using template literals
console.log(`Hello my name is ${name}, and my repo count is ${repoCount}`);

const gameName = new String("Saman Sandhu");
console.log(gameName); // [String: 'Saman Sandhu']
console.log(typeof gameName) //object

console.log(typeof name) //string

//String Methods
console.log(gameName[0]); //letter at 0th index
console.log(gameName.__proto__);

console.log(gameName.length); //Returns the length of the string

//Original value is not changed
console.log(gameName.toUpperCase()); //Converts the string to uppercase
console.log(gameName.toLowerCase()); //Converts the string to lowercase

console.log(gameName.charAt(1)); //Gives the character at index 1
console.log(gameName.indexOf('S')); //returns the index of first occurence of the letter

console.log(gameName.lastIndexOf('S')); //Gives the last occurence of the letter
console.log(gameName.split('')); //Returns an array separated by the provided delimiter/separator
console.log(gameName.split(" "));

//To get the specified part of a string
console.log(gameName.slice(0, 5)); //last index is excluded
console.log(gameName.substring(0,5));

//The key difference between slice and substring is that slice supports negative indices, while substring only supports positive ones.
console.log(gameName.slice(-6)); //start with the last index and continue till last 6th index included 

//Slice doesn't swap start and end, while substring automatically swaps if start>end

//Slice is used for advanced scenarios, while substring handles the simpler ones

const anotherGame = "Samarpreet".slice(-8, 4); //Start from back
console.log(anotherGame)

console.log("         Samandeep            ".trim()); //This will remove all the unecessary whitespaces

console.log("Samandeep".replace("man", "mar")) //This will replace a substring with another substring
const url = "https://www.google.com/saman%20sandhu";
console.log(url.replace("%20", "-"));

//For searching
console.log("Arzoyi".includes("zo")); //returns a boolean --> checks if a substring is a part of the string or not
console.log("Mahima".startsWith('M')); //Checks if it starts with a specific letter or not.
console.log("Taran".endsWith('m'));


//Join uses separator, while split uses delimiter



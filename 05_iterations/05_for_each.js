const coding = ["js", "ruby", "java", "python", "cpp"];

// forEach: Executes a function for each element in an array (does not return a new array).

/*
// Pseudocode for forEach
DEFINE array

CALL forEach on array with function(element):
    PERFORM operation on element
END FUNCTION

*/

//using arrow function
coding.forEach((element, index) => console.log(`${index} : ${element}`)) //callback function is the function to perform on each element -- index is optional parameter

//using traditional function
coding.forEach(function (element) {
    console.log(element);
})

function printMe(element){
    console.log("Hello " + element);
}

// coding.forEach((element) => printMe(element))
coding.forEach(printMe) //you just to pass in the reference of the function you want to execute on each element 

coding.forEach((element, index, arr) => console.log(element, index, arr))


const myCoding = [
    {
        languageName: "javaScript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
]

myCoding.forEach((item) => console.log(item.languageName));
myCoding.forEach((item) => console.log({...item})); // If you want to spread the properties of an object, use it inside an object literal:

// Memory Management in JavaScript

//Stack (Primitive) --> You get a copy, Heap (Non-primitive) --> Reference of original value

let myYoutubeName = "Samandeep Singh"; //Will go into stack --> Layer of plates (LIFO - Last In First Out)

let anotherName = myYoutubeName; //anotherName is just initialized with the value of myYoutubeName, but has just the copy, not the value itself
console.log(anotherName);

anotherName = "Hacktechnicals"; //Only the copy will be changed, not the actual value
console.log(myYoutubeName); //Samandeep Singh
console.log(anotherName); //Hacktechnicals

let userOne = { //Will go into heap
    email: 'samandeep0792@gmail.com',
    upiId: 'samandeep@okhdfc'
}

let userTwo = userOne; //It references to the memory address of the userOne, they both are pointing to the same thing.

userTwo.email = "tarandeep.sandhu97@gmail.com";
console.log(userOne.email); //Change userTwo email changes the userOne email as well because they were pointing to the same thing, just the label is different.


//Stack gives Copy
//Heap gives Reference

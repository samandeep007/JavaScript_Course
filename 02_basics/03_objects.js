// singleton --> declared using constructor --> One of its kind 
//object.create();

//objects have key value pairs, keys are just variable names.
//don't confuse objects with JSON

//object literals

const mySym = Symbol("key1")

const js_user = {
    name: "Samandeep Singh",
    "fullName": "Samandeep Singh Sandhu", //not accessible using dot
    // mySym: "myKey1",
    [mySym]: 'myKey1', //to store a symbol in an object
    age: 23,
    location: "Calgary",
    email: "samandeep0792@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}


//Array elements can only be accessed using indices, while object members can be accessed using both keys and values;

//How to access object members

console.log(js_user.email);

console.log(js_user['email']) //using key --> Each key is stored as a string which can map to any data type

// console.log(js_user."fullName") --> This is not possible
console.log(js_user["fullName"]);

console.log(typeof js_user['mySym']); //String value, but it was expected to be Symbol

console.log(js_user[mySym]);

js_user.email = "saman.sandhu2002@gmail.com";

// Object.freeze(js_user); //You won't be able to make changes to the js_user object now

js_user.age = 24

console.log(js_user["email"]);
console.log(js_user["age"]); //Still displays 23, 24 didn't propogate

console.log(js_user);

js_user.greeting = function(){
    console.log("Hello mere bhai");
}

// console.log(js_user.greeting); //make a call to the object method
js_user.greeting();

console.log(js_user.greeting());

console.log(js_user.greeting); //will not get executed --> [Function (anonymous)]

js_user.greeting2 = function(){
    console.log(`Hello ${this.name}`); //referencing the same object using this
}

js_user.greeting2();

// console.log(js_user);

js_user["greeting2"](); //this is also possible
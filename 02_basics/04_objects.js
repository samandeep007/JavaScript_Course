//objects --> continued

const tinderUser = new Object(); //using constructor --> Singleton

// tinderUser = {}
console.log(tinderUser); //Returns {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

//an object can have nested objects as well
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Samandeep",
            lastName: "Singh"
        }
    }
}

console.log(regularUser);

console.log(regularUser["fullName"]); // { userfullname: { firstName: 'Samandeep', lastName: 'Singh' } }

console.log(regularUser["fullName"]["userfullname"]["firstName"]); //Samandeep

console.log(regularUser.fullName?.userfullname.firstName); //using dot notation --> Adding ? provides safety

// Concatenating the objects

const obj1 = {1: "one", "2": "two", 3: "three"};
const obj2 = {4: "four", 5: "five"};
const obj3 = {6: "six"};
// const obj3 = {obj1, obj2}; //Object inside object
const obj4 = Object.assign({}, obj1, obj2, obj3); //Combine obj1, and obj2 into {} --> Good practice

// Object.assign(target, ...sources);

//The Object.assign() method is used to copy properties from one or more source objects to a target object. It is commonly used for shallow cloning and merging objects.

const obj5 = {...obj1, ...obj2, ...obj3}; //Break the object into key-values
console.log(obj4);
console.log(obj5);

//mimicking the API result

const users = [
    {
        id: 1,
        name: "Saman"
    },
       {
        id: 2,
        name: "Deep"
    },
       {
        id: 3,
        name: "Singh"
    },
       {
        id: 4,
        name: "Sandhu"
    }
]

console.log(users[0].name); //displays the name of the first user fetched

console.log(tinderUser);

//In JavaScript, Object is both a constructor function (class-like) and a global object.

// Common JavaScript Object Methods:
// - Object.keys(obj): Returns an array of the object's keys.
// - Object.values(obj): Returns an array of the object's values.
// - Object.entries(obj): Returns an array of key-value pairs as [key, value] arrays.
// - Object.assign(target, ...sources): Copies properties from source objects to the target object.
// - Object.freeze(obj): Prevents adding, removing, or modifying properties of the object.
// - Object.seal(obj): Prevents adding or removing properties but allows modifying existing ones.
// - Object.create(proto): Creates a new object with the specified prototype.
// - Object.getPrototypeOf(obj): Returns the prototype of the object.
// - Object.setPrototypeOf(obj, proto): Sets the prototype of the object.
// - Object.hasOwn(obj, prop): Checks if the object has a property as its own (not inherited).
// - Object.is(value1, value2): Compares two values for strict equality, considering `NaN` and `-0`.
// - Object.fromEntries(iterable): Converts key-value pairs (e.g., from a Map or array) into an object.




console.log(Object.keys(tinderUser)); //Returns an array of object keys

console.log(Object.values(tinderUser)); //Returns an array of object values

console.log(Object.entries(tinderUser)); //Returns an array of key-value pairs as [key, value] arrays.

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //pass the parameter as string

console.log(tinderUser.hasOwnProperty('isLogged')); 
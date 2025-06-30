//Arrow functions were released in ES6 2015. 

// THIS keyword tells about the current context

const user = {
    username: "samandeep0792",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`) //referring the current context
        console.log(this) //this refers to current values/context
    }
}

user['welcomeMessage']();
user.username = "samarpreet0810"; //we changed the context here, earlier it was about samandeep0792
user.welcomeMessage();

console.log(this); //global context is empty object in node, while global context is window in DOM

function one() {
    let username = "samandeep0792"
    console.log(this.username); //this keyword is not available in functional scope. It is just available to objects
}

one(); //this time, current context is function itself

// const chai = function(){
//      let username = "samandeep0792"
//     console.log(this.username);
// }

// chai(); //returns undefined

const chai = () => {
    let username = "samandeep0792"
    console.log(this.username);
    console.log(this); //returns empty parenthesis --> inherits from the outer scope
}

chai();

// Arrow functions

const addTwo = (numOne, numTwo) => {
    return numOne + numTwo
}

console.log(addTwo(2,5));

//Implicit return

const addThree = (numOne, numTwo, numThree) => numOne + numTwo + numThree; // or const addThree = (numOne, numTwo, numThree) => (numOne + numTwo + numThree);

//parenthesis doesn't require return keyword, while curly braces require it

const returnObj = () => ({username: "samandeep007"}); //to return an object use parenthesis

console.log(addThree(1,2,3));
console.log(returnObj());

const myArr = [2,5,4,6,8];
myArr.forEach((element) => console.log(element)); //doesn't return anything

// myArr.map(); //returns an array after performing the function on each array element
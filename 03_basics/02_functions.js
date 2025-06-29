// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500)); 

//When you don't know the number of arguments --> Use REST operator

// Rest operator returns an array
function calculateCartPrice(...nums) {
    return nums; //This is an array
}

console.log(calculateCartPrice(200, 400, 500, 2));

const user = {
    username: "Samandeep Singh",
    price: 199
}

function handleObject(any_object) {
    console.log(`username is ${any_object.username} and price is ${any_object.price}`);
}

handleObject(user); //It is compulsory to pass an object --> Type safety matters

handleObject({ username: "Arzoyi2027", price: 1000 });

//Passing in array

const myArr = [200, 400, 100, 500];

function printSecondElement(myArr){
    if(myArr.length>1){
        return myArr[1];
    }
    return "Array doesn't have second element"
}

console.log(printSecondElement(myArr));

console.log(printSecondElement([21]))
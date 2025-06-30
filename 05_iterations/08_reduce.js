// reduce: Applies a function to each element of an array, accumulating a single result.

// Syntax: array.reduce((accumulator, currentValue) => { ... }, initialValue);

//currentValue is the element at the current index

//accumulator is an empty variable that stores the return value from the previous function call

const arrOne = [1, 2, 3, 4];
const summation = arrOne.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0);

console.log("The value of summation is " + summation);

//for better understanding, let's do it with a char arr and convert it into string

const myNameChars = ['S', 'A', 'M', 'A', 'N'];

const myName = myNameChars.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(myName)

//Shopping cart

const myCart = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 79.50,
    category: "Footwear",
    inStock: true
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 49.99,
    category: "Appliances",
    inStock: false
  },
  {
    id: 4,
    name: "Backpack",
    price: 29.99,
    category: "Accessories",
    inStock: true
  },
  {
    id: 5,
    name: "Smartphone",
    price: 499.99,
    category: "Electronics",
    inStock: true
  }
]

const myCartTotal = myCart.reduce((total, current_product) => total + current_product.price, 0);

console.log(`Your cart total is \$${myCartTotal}`);
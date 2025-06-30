const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => console.log(item)); //

console.log(values); //undefined, because ForEach doesn't return anything

// forEach: Executes a function for each element in an array (does not return a new array).

// map: Creates a new array by applying a function to each element of the original array.

const nums = [1, 2, 3, 4, 5, 6];

const squaredNums = nums.map((num) => num ** 2); //will return an array of squared Nums
console.log(squaredNums);

// filter: Creates a new array containing only the elements that satisfy a given condition.

const evenNums = nums.filter((num) => num % 2 == 0);
console.log(evenNums)

const oddNums = nums.filter((num) => {
    return num % 2 != 0 //use return if you open the scope
}
);
console.log(oddNums)


//using forEach instead of nums

const newNums = [];
nums.forEach((element) => element % 2 == 0 && newNums.push(element));

console.log(newNums)


const books = [
    { title: "The Silent Patient", genre: "Thriller", publish: 2019, edition: 2019 },
    { title: "To Kill a Mockingbird", genre: "Thriller", publish: 1960, edition: 1960 },
    { title: "Sapiens: A Brief History of Humankind", genre: "History", publish: 2011, edition: 2014 },
    { title: "1984", genre: "Thriller", publish: 1949, edition: 1950 },
    { title: "The Great Gatsby", genre: "Classic", publish: 1925, edition: 1926 },
    { title: "Becoming", genre: "History", publish: 2018, edition: 2019 },
    { title: "Educated", genre: "History", publish: 2018, edition: 2018 },
    { title: "The Alchemist", genre: "Classic", publish: 1988, edition: 1993 },
    { title: "The Catcher in the Rye", genre: "Classic", publish: 1951, edition: 1952 },
    { title: "Pride and Prejudice", genre: "History", publish: 1813, edition: 1830 },
];


const filteredBooks = books.filter((book) => book.genre === "History" || book.publish > 2015);

// console.log(filteredBooks);

const userBooks = books.filter((book) => book.genre === "History" && book.publish > 2000);

console.log(userBooks);
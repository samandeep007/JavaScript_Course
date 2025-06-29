// Temporal API key classes and methods:
// - Temporal.Now: current date/time (e.g., plainDateTimeISO(), instant())
// - Temporal.PlainDate: calendar date (from(), add(), subtract(), equals())
// - Temporal.PlainTime: time of day (from(), add(), subtract())
// - Temporal.PlainDateTime: date + time without timezone (from(), add(), toString())
// - Temporal.ZonedDateTime: date + time with timezone (from(), withTimeZone(), toInstant())
// - Temporal.Duration: time length (from(), add(), negate())
// - Temporal.Instant: precise timestamp (from(), add(), since(), until())
// - Temporal.TimeZone: timezone info (from(), getOffsetNanosecondsFor())


let myDate = new Date(); //Date is a class

console.log(myDate.toString()); //Gives a better view of the date

console.log(myDate.toISOString()); //Gives date in ISO (International Organization for Standardization) format

console.log(myDate.toDateString()); //Returns only the date in a readable format
console.log(myDate.getTime()); //Give the time elapsed since advent of Unix in milliseconds 

console.log(typeof myDate); //object

console.log(myDate.toLocaleString()); //displays date and time according to the US Standards

console.log(myDate.toLocaleString('en-IN')); //according to Indian standards

let myCreatedDate = new Date(2023, 0, 23); //Months start from 0 in javascript
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myNewDate = new Date(2023, 1, 25, 5, 3); 
console.log(myNewDate.toLocaleString('en-IN')); // 25/2/2023, 5:03:00 am

let anotherDate = new Date("2023-01-14"); //When you do YYYY-MM-DD, month starts from 1
console.log(anotherDate.toDateString()); // Fri Jan 13 2023

let date = new Date("01-04-2023"); //It follows MM-DD-YYYY format
console.log(date.toDateString());

let myTimeStamp = Date.now(); //Date is both an object and class in JavaScript

console.log(myTimeStamp) //returns the miliseconds passed

console.log(myCreatedDate.getTime());

//myTimeStamp and myCreatedDate.getTime() can be compared

console.log(Math.floor(Date.now()/1000)) //to get the value in seconds 

//NOTE: There are 1,000 milliseconds in a second.

//Applying operations on Date

let newDate = new Date();
console.log(newDate); // 2025-06-29T18:08:09.915Z

console.log(newDate.getFullYear());
console.log(newDate.getDate());
console.log(newDate.getDay()); //day of the week
console.log(newDate.getMonth() + 1);

//printing date using string interpolation
console.log(`Today is ${newDate.getDate()}th day of ${newDate.getMonth() + 1}th month of the year ${newDate.getFullYear()}`);


//Important method

const improvedDate = newDate.toLocaleString('default', {weekday: "long", day: "2-digit"});

console.log(improvedDate);
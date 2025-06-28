const accountId = 15774; //Number
let accountEmail = "samandeep0792@gmail.com"; //String --> "" or ''
var accountPassword = "saman2002";
accountCity = "Jaipur" //Not recommeded but possible
let accountState; //Just declared, not defined. Value will be undefined

// const is used when the value of the variable is not expected to change throughout the program. To lock the value

// accountId = 792; //Assignment to constant variable error
console.log(accountId);

accountEmail = "saman.sandhu2002@gmail.com";
accountPassword = "Saman@2002";
accountCity = "Bengaluru";
console.log(accountState); 

// console.table([]) accepts an array and displays the data in a tabular format
console.table([accountEmail, accountPassword, accountCity]);

// let vs var -- refer Grok
// {
//     This is called scope
// }

/*
Prefer not to use var 
because of the issue in block scope and functional scope
 */

// Scope should never leak

//Nested scope

function one(){

    const username = "hitesh";

    function two(){
        // let username = "samandeep"
        const website = "youtube";
        console.log(username); //Should be accessible, within the outer scope
    }
    // console.log(website); //it is outside the scope of function two
    two();
}

one(); // Stack --> one() --> two() | LIFO | All the nested function calls are executed first

if(true){
    const username = "samandeep";
    if(username === "samandeep"){
        const website = " youtube";
        console.log(username + website); //outer conditional is global scope for this inner conditional
    }
    // console.log(website);
}

// console.log(username); //was available within the conditional scope only

// +++++++++++++++ interesting +++++++++++++++

console.log(addOne(5)); //returns 6 --> function can be accessed before declaration

function addOne(num){
    return num + 1;
}

console.log(addTwo(5)); //Error because addTwo variable is being used before declaration

const addTwo = function(num){ //this is more of an expression
    return num + 2;
}

"use strict";

console.log("Hello from external Javascript")

alert("Welcome to my Website!")
let userFavoriteColor = "blue"
let userInput = prompt("What is you favorite color?");

alert("Great, " + userInput + " is my favorite color too!")
console.log("The user entered: " + userInput);


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for movie per day is $3, how much will you have to pay?
let littleMermaid = 3, brotherBear = 5, hercules = 1;
let pricePerDay = 3;
let total = ((littleMermaid + brotherBear + hercules) * pricePerDay);


alert("The amount you will pay is $" + total + " to rent all movies")
console.log("The amount you will pay is $" + total + " to rent all movies");


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let google = 400, amazon = 380, facebook = 350;
let gHours = 6, aHours = 4, fbHours = 10;
let totalPay = ((google*gHours) + (amazon*aHours) + (facebook*fbHours))
alert("Your total pay is $" + totalPay + " for the week.")
console.log("Your total pay is $" + totalPay + " for the week")

// A student can be enrolled in a class only if the class is not full and thegit  class schedule does not conflict with her current schedule.

// let enrollment = (full, conflict) => full === true && conflict === true ? console.log("Registered") : console.log("Error: conflict");
// enrollment(true, true);



// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let boughtItems = prompt("How many items did you buy?");

if ((customer.boughtItems.length > 2 && !customer.isPremium) && )



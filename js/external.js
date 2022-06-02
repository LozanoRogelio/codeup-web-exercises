"use strict";

console.log("Hello from external Javascript")

alert("Welcome to my Website!")

let userInput = prompt("What is you favorite color?");

alert("Great, " + userInput + " is my favorite color too!")

console.log("The user entered: " + userInput);

// Exercise 3 with user interaction:

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for movie per day is $3, how much will you have to pay?
// let littleMermaid = 3, brotherBear = 5, hercules = 1;
// let pricePerDay = 3;
// let total = ((littleMermaid + brotherBear + hercules) * pricePerDay);
// alert("The amount you will pay is $" + total + " to rent all movies")
let pricePerDay = 3;
let daysRented = prompt("How many days would you like to rent your movie?")

alert("Awesome! Youll be renting movies for " + daysRented + " days. That means your total is $" + (daysRented * pricePerDay));



// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let google = 400, amazon = 380, facebook = 350;
// let gHours = 6, aHours = 4, fbHours = 10;
// let totalPay = ((google*gHours) + (amazon*aHours) + (facebook*fbHours))
// alert("Your total pay is $" + totalPay + " for the week.")
// console.log("Your total pay is $" + totalPay + " for the week")

let totalGoogle = prompt("Hey you're working hard - how many did your work for google?")

let totalAmazon = prompt("Hey you're working hard - how many did your work for amazon?")

let totalFacebook = prompt("Hey you're working hard - how many did your work for facebook?")

let sunGoogle = google + totalGoogle;

alert("Cool here's what I'm seeing, you will earn $" + (totalAmazon + amazon) + " from Amzaon. Finally you'll earn $" + (totalFacebook * facebook) + " from Facebook! Amazing go have fun!")

// A student can be enrolled in a class only if the class is not full and thegit  class schedule does not conflict with her current schedule.

let timeInSchedule = confirm("Hey do you have time in this schedule for this class?")

let capacityInClass = confirm("Did the class have room for an additional student?")

alert("It is " + (capacityInClass && timeInSchedule) + " that you can attend this class with what you told me")





// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let moreThanTwo = confirm("Do you have more than two items in your cart?")

let offerStillValid = confirm("Is the offer on the product still valid?")

let premiumMember = confirm("Are you a premium member?")

alert("Welcome to Walmart! From what you told me its " + (moreThanTwo && offerStillValid || premiumMember) + " that you'll get a free yeti cooler!")



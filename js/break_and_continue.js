"use strict";

let userNum = prompt("Choose an odd number between 1 and 50!")

for (let k = 0; k <= 50; k++) {
    if (k % 2 !== 0) {
    console.log("Here is an odd number: " + k)
    } else if (userNum) {
        console.log("Yikes, skipping number: " + userNum)
        continue;
    }

    }


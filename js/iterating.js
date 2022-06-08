
(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Roger', 'Alex', 'Lito', 'Adrian']

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // console.log('The first name is: ' + names[0]);
    // console.log('The second name is: ' + names[1]);
    // console.log('The third name is: ' + names[2]);
    // console.log('The fourth name is: ' + names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // for (let n = 0; n < names.length; n++) {
    //     console.log("The name is " + names[n])
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(function(name){
    //     console.log("Open the box and you'll find " + name + ".")
    //     });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    // let locations = [1, 2, 3, 4, 5]
    //
    // let first = locations => locations[0];
    // console.log(first(locations))
    //
    //
    // let second = locations => locations[1];
    // console.log(second(locations))
    //
    // let last = locations => locations[locations.length -1];
    // console.log(last(locations))

// Example 2 - Getting specific elements in array
//     let colors = ['red', 'yellow', 'green', 'blue', 'silver']
//
//
//     let first = colors => colors[0];
//     console.log(first(colors))
//
//
//     let second = colors => colors[1];
//     console.log(second(colors))
//
//     let last = colors => colors[colors.length -1];
//     console.log(last(colors))



})();
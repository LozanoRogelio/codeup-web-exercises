(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // let names = {};
    // console.log(typeof names);
    //
    // names.firstName = "Rick"
    // names.lastName = "Sanchez"
    //
    //
    //
    // console.log(names.firstName)
    // console.log(names.lastName)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // names.sayHello = ("Hello from " + names.firstName + " " + names.lastName + "!")
    //
    // console.log(names.sayHello)

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    // function mathDiscount (discount) {
    //     return (shoppers.amount * .12);
    // }
    // mathDiscount();

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}

    ];
    console.log(shoppers)

        shoppers.forEach(function (shopper) {
            if (shopper.amount > 200) {
                let discountedTotal = (shopper.amount * .88)
                console.log("Hey " + shopper.name + " your total amount was $" + shopper.amount + ", congrats you get a discount of $" + (shopper.amount * .12) + " , your price after the discount is $" + discountedTotal);
            } else {
                console.log("Sorry " + shopper.name + " you do not qualify for a discount since your total of $" + shopper.amount + " is below $200.");
            }
        })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

        let books = []

    books[0] = {title: "The Last Flight",
                author: {
                    firstName: "Julie",
                    lastName: "Clark"
                }
    }

    books[1] = {title: "Verity",
                author: {
                    firstName: "Colleen",
                    lastName: "Hoover"
                }
    }

    books[2] = {title: "The Maid A Novel",
                author: {
                    firstName: "Nita",
                    lastName: "Prose"
                }
    }

    books[3] = {title: "The Devil May Dance",
                author: {
                    firstName: "Jake",
                    lastName: "Tapper"
                }
    }

    books[4] = {title: "Watching You",
                author: {
                    firstName: "Lisa",
                    lastName: "Jewell"
                }
    }

    console.log(books)
    console.log(books[1].author.lastName)








    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.forEach(function (book, index)  {
        console.log(
            "Book # " + (index + 1) + "\n" +
            "Title: " + book.title + "\n" +
            "Author: " + book.author.firstName + book.author.lastName +
            "\n" + "---"

        );
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
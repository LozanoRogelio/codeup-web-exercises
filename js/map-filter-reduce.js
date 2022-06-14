const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
    // Q1
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

//    Q2
//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    let threeLanguages = users.filter(function(user) {
        return user.languages.length >= 3
    });

    console.log(threeLanguages)

//     Q3
//     Use .map to create an array of strings where each element is a user's email address

    let emailAddress = users.map(function(user) {
        return user.email
    });

    console.log(emailAddress)


//    Q4
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    let totalYears = users.reduce(function(total, user) {
        return total + user.yearsOfExperience
    }, 0)
    let yearAverages = totalYears/users.length

console.log(totalYears)
console.log(yearAverages)


//    Q5
//     Use .reduce to get the longest email from the list of users.
    let longestEmail = users.reduce(function(theLongestEmail,user) {
        if (user.email.length > theLongestEmail.length) {
        return user.email
        } else {
            return theLongestEmail
        }
    }, "");

console.log(longestEmail)



//    Q6
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//


    let stringNames = users.reduce(function(allStringNames,user) {
    return allStringNames + user.name + ", ";
    }, "");

stringNames = stringNames.substr(0,stringNames.length - 2)

console.log(stringNames)


// Bonus

let uniqueLanguages = users.reduce(function(uniqueSoFar, user) {
    for (let language of user.languages) {
        uniqueSoFar.add(language)
    }
    return uniqueSoFar;
}, new Set());
console.log(uniqueLanguages)


"use strict";
document.addEventListener("DOMContentLoaded", function () {
    (async function() {
        const options = {
            method: 'GET',
            headers: {
                "Authorization": GITHUB_API_KEY
            }
        };



        function getGithubUsernames() {
            return fetch('https://api.github.com/users', options)
                .then(response => response.json())
                .catch(function(error) {
                    console.warn("ERROR: " + error);
                });
        }

// later on...

        const users = await getGithubUsernames()
        console.log(users);

        function getLastCommit() {
            users.then(response => response.json())
        };


    })();
});
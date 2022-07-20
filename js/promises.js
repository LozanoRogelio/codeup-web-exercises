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
            return fetch(`https://api.github.com/users/LozanoRogelio/events/public`, options)
                .then(response => response.json())
                .catch(function(error) {
                    console.warn("ERROR: " + error);
                });
        }

// later on...

        const users = await getGithubUsernames()
        console.log(users);

        function getLastCommit(username) {
            return fetch("https://api.github.com/users/" + username + "/events/public", options)
                .then(res => {
                    return res.json();
                }).then(events => {
                    for(let event of events) {
                        if (event.type === 'PushEvent') {
                            return event.payload.commits;
                        }
                    }
                });

        }
        const lastEvent = await getLastCommit("LozanoRogelio");
        console.log(lastEvent);



    })();
});
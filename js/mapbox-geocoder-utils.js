function geocode(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function (data) {
            return data.features[0].place_name;
        });
}

function getLocationInfoFromAddress(address, token = MAPBOX_API_KEY) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return fetch(`${url}${encodeURIComponent(address)}.json?access_token=${token}`)
        .then(async function (res) {
            const data = await res.json();
            console.log(data);
            const locationInfo = {
                "address": address,
                "latLng": data.features[0].center,
                "description": data.features[0].place_name
            };
            return locationInfo;
        });
}
const { isPointWithinRadius } = require('geolib');

//HARDCODED THis would be from our DB
const places = [{ city: 'rancho', latitude: 38.583398, longitude: 121.283237 },
{ city: 'Arden', latitude: 38.597777, longitude: 121.422689 },
{ city: 'Natomas', latitude: 38.615832, longitude: 121.497858 },
{ city: 'San Jose', latitude: 37.275687, longitude: 121.838733 }];


$.ajax({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}A&key=AIzaSyBQ1_V_WrUt_H5buMATmErTV5MJp-LedFE`,
    method: "GET"
}).then(res => {
    var lat = '';
    var lng = '';
    var address = address;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();

        } else {
            console.log("Geocode was not successful for the following reason: " + status);
        }
    });

    console.log('Latitude: ' + lat + ' Logitude: ' + lng);
});
//Radius from user input
const radius = 10000;

//This is the user entered data
const currentPlace = { city: 'Downtown Sac', latitude: 38.576969, longitude: 121.494962 };
const results = [];
for (let index = 0; index < places.length; index++) {

    const isPointInRadius = isPointWithinRadius(
        currentPlace,
        places[index],
        radius
    );

    if (isPointInRadius) {
        results.push(places[index]);
    }
}

// const resultsBetter = places.filter(place => isPointWithinRadius(
//     currentPlace,
//     place,
//     radius
// ));



console.log(results);
// console.log(resultsBetter);
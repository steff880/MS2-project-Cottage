// Map
// Code below from https://developers.google.com/maps/documentation/javascript/adding-a-google-map and modified to fit project needs.
function initMap() {

    let alps = { lat: 47.001127268554065, lng: 9.613764438346665 };

    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: alps,
    });

    let marker = new google.maps.Marker({
        position: alps,
        map: map,
    });
}

// Map End
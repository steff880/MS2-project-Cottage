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


// Show and hide Carousel

function showAndHide(event) {
    let triggerObject = event.srcElement;

    let btnOne = document.getElementById("btn-card-one");

    let btnTwo = document.getElementById("btn-card-two");

    let firstCarousel = document.getElementById("first-carousel");

    let secondCarousel = document.getElementById("second-carousel");

    if (triggerObject === btnOne) {
        firstCarousel.style.display = "block";
        secondCarousel.style.display = "none";
    } else if (triggerObject === btnTwo) {
        secondCarousel.style.display = "block";
        firstCarousel.style.display = "none";
    } else {
        secondCarousel.style.display = "none";
        firstCarousel.style.display = "none";
    }

}


// Show and hide Carousel
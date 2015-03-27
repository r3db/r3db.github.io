$(document).ready(function() {
    loadMap();
    fixMapViewport();
});

$(window).resize(function() {
    loadMap();
    fixMapViewport();
});

function loadMap() {
    var latLng = new  window.google.maps.LatLng(37.0233785, -7.9322946);

    var options = {
        zoom: 17,
        center: latLng,
        mapTypeId:  window.google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        panControl: true,
    };

    new window.google.maps.Marker({
        position: latLng,
        map: new window.google.maps.Map($('#map')[0], options),
    });
}

function fixMapViewport() {
    $('#map').height($('.main-content').height() - $('.navbar').height() - $('.footer').height());
}
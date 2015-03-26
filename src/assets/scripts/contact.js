$(document).ready(function() {
    var map;
    var googleMapsApi = window.google.maps;
    var officePosition = new googleMapsApi.LatLng(37.0233785, -7.9322946);
    var mapUrl = "https://www.google.pt/maps/place/R.+Dr.+Francisco+Sousa+Vaz+1,+8000-290+Faro";

    var options = {
        zoom: 17,
        center: officePosition,
        mapTypeId: googleMapsApi.MapTypeId.ROADMAP,
        streetViewControl: false,
        panControl: false,
    };

    map = new googleMapsApi.Map($('#map')[0], options);

    var marker = new googleMapsApi.Marker({
        position: officePosition,
        map: map,
        icon: "images/map/logo_map_link.png",
    });

    googleMapsApi.event.addListener(marker, 'click', function() {
        window.open(mapUrl, '_blank');
    });

    $('#map').height($('.main-content').height() - $('.footer').height());
});
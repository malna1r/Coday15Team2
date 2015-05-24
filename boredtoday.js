"use strict";

var map;
var longitude = -34.397;
var latitude = 150.644;
var myLatLng = null;

function initialize() {
  myLatLng = new google.maps.LatLng(longitude, latitude);
  var mapOptions = {
    zoom: 8,
    center: myLatLng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var contentString = '<div id="content">'+
    '<h1 id="businessinfo"><?php Print($name); ?></h1>' +
    '<p>Yelp Id: <?php Print($yelpid); ?></p>' + 
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: name
  })

  google.maps.event.addListener(marker, 'click', function() { infowindow.open(map, marker);})
}

google.maps.event.addDomListener(window, 'load', initialize);

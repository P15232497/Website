// javasript for google map on about us page
"use strict";

function initMap() {
  let Cineworld = {lat: 52.772000, lng:-1.203900};
  let mapDemo = document.getElementById("map");


  let map = new google.maps.Map(mapDemo, {
      zoom: 16,
      center: Cineworld
    });

  // sets the different markers that show on the map
  let markerCineworld = new google.maps.Marker({
    position: Cineworld,
    map: map,
    title: 'Cineworld'

  });
}

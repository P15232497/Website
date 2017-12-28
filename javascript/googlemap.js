"use strict";

function initMap() {
  let Cineworld = {lat: 52.772000, lng:-1.203900};
  let mapDemo = document.getElementById("map");


  let map = new google.maps.Map(mapDemo, {
      zoom: 16,
      center: Cineworld
    });

  // these set different markers you want to show on your map
  let markerCineworld = new google.maps.Marker({
    position: Cineworld,
    map: map,
    title: 'Cineworld'

  });
}

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(49.990889, 19.941606),
    zoom: 10,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}



function openFullscreen(videoClass) {
  var elem = document.getElementById(videoClass)
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
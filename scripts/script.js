window.onload = initialier;
var latitude;
var longitude;

function putImageOnMap(name){
  getExif(name, 'latitude');
  getExif(name, 'longitude');
  var receivedLatitude = localStorage.getItem('latitude');
  latitude = receivedLatitude
  var receivedLongitude = localStorage.getItem('longitude');
  longitude = receivedLongitude;

  putMarker(latitude, longitude);
}

function initialier(){
  getExif('img', 'latitude');
  getExif('img', 'longitude');
  var receivedLatitude = localStorage.getItem('latitude');
  latitude = receivedLatitude
  var receivedLongitude = localStorage.getItem('longitude');
  longitude = receivedLongitude;
  console.log(receivedLatitude);
  console.log(receivedLongitude);
  initializeMap();


    // Now generally a lot of things work but
    // you gotta find a way to put all the pics' markers on map while loading the page


}

function getExif(what, type) {

  var chosenImg = document.getElementById(what);

  if(type == 'latitude'){
    EXIF.getData(chosenImg, function(){
      var latitudeRaw = EXIF.getTag(this, "GPSLatitude");
      var trueSeconds = latitudeRaw[2].numerator / latitudeRaw[2].denominator;
      var trueMinutes = latitudeRaw[1].numerator / latitudeRaw[1].denominator;
      var trueDegrees = latitudeRaw[0].numerator / latitudeRaw[0].denominator;

      var trueLatitude = (trueSeconds / 60 + trueMinutes) / 60 + trueDegrees;
      localStorage.removeItem('latitude');
      localStorage.setItem('latitude', trueLatitude);
    });
  }
  else if(type == 'longitude'){
    EXIF.getData(chosenImg, function(){
      var longitudeRaw = EXIF.getTag(this, "GPSLongitude");
      var trueSeconds = longitudeRaw[2].numerator / longitudeRaw[2].denominator;
      var trueMinutes = longitudeRaw[1].numerator / longitudeRaw[1].denominator;
      var trueDegrees = longitudeRaw[0].numerator / longitudeRaw[0].denominator;

      var trueLongitude = (trueSeconds / 60 + trueMinutes) / 60 + trueDegrees;
      localStorage.removeItem('longitude');
      localStorage.setItem('longitude', trueLongitude);
    });
  }

}

function initializeMap(){
  var map = L.map('map').setView([51.763060558185416, 14.185544492450429], 5);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

function putMarker(lati, long){
  L.marker([latitude, longitude]).addTo(map)
    .bindPopup('The photo was taken here!')
    .openPopup();
}



/*
  var all = EXIF.getAllTags(this);
  var make = EXIF.getTag(this, "Make");
  var longitudeString = JSON.stringify(EXIF.getTag(this, "GPSLongitude"));
  var latitudeString = JSON.stringify(EXIF.getTag(this, "GPSLatitude"));
*/
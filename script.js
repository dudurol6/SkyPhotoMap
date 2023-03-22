window.onload = initialier;

function initialier(){
  getExif();
  initializeMap();
}

function getExif() {

  var img = document.getElementById("img");

  EXIF.getData(img, function(){

    var all = EXIF.getAllTags(this);

    var make = EXIF.getTag(this, "Make");
    var longitude = JSON.stringify(EXIF.getTag(this, "GPSLongitude"));
    var latitude = JSON.stringify(EXIF.getTag(this, "GPSLatitude"));

    var longitudeLength = longitude.length
    var latitudeLength = latitude.length
    var newLongitude = '';


    for(longitudeLength; longitudeLength > 0; longitudeLength--){
      newLongitude = longitude.replace('[', '');  
      newLongitude = newLongitude.replace(']', '');  

      console.log(newLongitude.length); 
    }

    console.log(newLongitude);
  });

}

function initializeMap(){
  var map = L.map('map').setView([51.247571639106894, 22.55430200472966], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  /*L.marker([51.247571639106894, 22.55430200472966]).addTo(map)
    .bindPopup('Lublin is cool')
    .openPopup();*/

}


// https://www.w3schools.com/js/js_string_methods.asp
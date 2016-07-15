function initialize() {
  var map_center = {lat: 50.034784, lng: 21.998141};
  var marker1 = {lat: 50.034330, lng: 22.000566};
  var styles = [
    {
      stylers: [
        { hue: "#42c3ff" },
        { saturation: 74}
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 20 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: map_center,
    scrollwheel: false
  });
  map.setOptions({styles: styles});
  var marker1 = new google.maps.Marker({
    position: marker1,
    map: map,
    title: 'Przedszkole',
    icon: './img/marker.png'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

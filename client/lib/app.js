/* var MAP_ZOOM = 15;

  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.map.onCreated(function() {
    var self = this;

    GoogleMaps.ready('map', function(map) {
      var marker;

      // Create and move the marker when latLng changes.
      self.autorun(function() {
        var latLng = Geolocation.latLng();
        if (! latLng)
          return;

        // If the marker doesn't yet exist, create it.
        if (! marker) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(latLng.lat, latLng.lng),
            map: map.instance
          });
        }
        // The marker already exists, so we'll just change its position.
        else {
          marker.setPosition(latLng);
        }

        // Center and zoom the map view onto the current position.
        map.instance.setCenter(marker.getPosition());
        map.instance.setZoom(MAP_ZOOM);
      });
    });
  });

  Template.map.helpers({
    geolocationError: function() {
      var error = Geolocation.error();
      return error && error.message;
    },
    mapOptions: function() {
      var latLng = Geolocation.latLng();
      // Initialize the map once we have the latLng.
      if (GoogleMaps.loaded() && latLng) {
        return {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  }); */


Meteor.startup(function() {  
  GoogleMaps.load();
});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(45.024000, -123.143284),
        zoom: 16
      };
    }
  }
});


GoogleMaps.ready('map', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(45.023989, -123.141672),
      map: map.instance,
    });

    var infowindow = new google.maps.InfoWindow({
      content: '<a href="/report1">Report</a>'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map.instance, marker);
    });

    var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(45.023610, -123.138861),
      map: map.instance,
    });
    var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(45.022427, -123.139226),
      map: map.instance,
    });
    var marker4 = new google.maps.Marker({
      position: new google.maps.LatLng(45.024944, -123.145963),
      map: map.instance,
    });
    var marker5 = new google.maps.Marker({
      position: new google.maps.LatLng(45.027128, -123.142380),
      map: map.instance,
    });
});
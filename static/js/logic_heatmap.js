// create a map object
var dc_map = L.map("map", {
    center: [38.90, -77.03],
    zoom: 13
});

// Add a tile layer
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
})
streetmap.addTo(dc_map);

// Grabbing geojson file
var ward_geojson = "https://opendata.arcgis.com/datasets/0ef47379cbae44e88267c01eaec2ff6e_31.geojson"
d3.json(ward_geojson, function(data) {
// Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(dc_map);
  });

// Open csv file and read 
d3.csv("Resources/dc_crimes_search_results.csv", function(crime_data) {
    // if (error) return console.warn(error);
    var heatArray = [];
    for (var i=0; i<crime_data.length; i++){
      var location = crime_data[i];
      if (location) {
          heatArray.push([location.LATITUDE, location.LONGITUDE]);
      }
    }
    
    L.heatLayer(heatArray, {
        radius: 20,
        blur: 35
      }).addTo(dc_map);
            
    });
   
   
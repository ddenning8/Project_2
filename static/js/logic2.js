// Creating map object
var map = L.map("map", {
  center: [38.9072, -77.0369],
  zoom: 12
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

var link = "https://opendata.arcgis.com/datasets/0ef47379cbae44e88267c01eaec2ff6e_31.geojson";

// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(Ward) {
  switch (Ward) {
  case "Ward 1":
    return "#fc4e2a";
  case "Ward 2":
    return "#b10026";
  case "Ward 3":
    return "#e31a1c";
  case "Ward 4":
    return "#feb24c";
  case "Ward 5":
    return "#fed976";
  case "Ward 6":
    return "#fd8d3c";
  case "Ward 7":
    return "#ffeda0";
  case "Ward 8":
    return "#ffffcc";
  default:
    return "black";
  }
}

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Style each feature (in this case a neighborhood)
    style: function(feature) {
      return {
        color: "black",
        // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
        fillColor: chooseColor(feature.properties.LABEL),
        fillOpacity: 0.6,
        weight: 1.5
      };
    },
    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.6
          });
        },
        // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        click: function(event) {
          map.fitBounds(event.target.getBounds());
        }
      });

      L.marker([38.8454, -77.0000]).addTo(map)
      .bindPopup('<strong>Ward 8</strong><br>Median Residential Sale Price: $320,000');

      L.marker([38.8881, -76.9433]).addTo(map)
      .bindPopup('<strong>Ward 7</strong><br>Median Residential Sale Price: $321,500');

      L.marker([38.8898, -76.9929]).addTo(map)
      .bindPopup('<strong>Ward 6</strong><br>Median Residential Sale Price: $815,000');

      L.marker([38.9283, -76.9796]).addTo(map)
      .bindPopup('<strong>Ward 5</strong><br>Median Residential Sale Price: $580,000');

      L.marker([38.9595, -77.0270]).addTo(map)
      .bindPopup('<strong>Ward 4</strong><br>Median Residential Sale Price: $665,999');

      L.marker([38.9381, -77.0833]).addTo(map)
      .bindPopup('<strong>Ward 3</strong><br>Median Residential Sale Price: $1,220,000');

      L.marker([38.8999, -77.0451]).addTo(map)
      .bindPopup('<strong>Ward 2</strong><br>Median Residential Sale Price: $1,500,000');

      L.marker([38.9217, -77.0297]).addTo(map)
      .bindPopup('<strong>Ward 1</strong><br>Median Residential Sale Price: $843,000');

      // Giving each feature a pop-up with information pertinent to it
      // layer.bindPopup("<h1>" + feature.properties.LABEL + "</h1> <hr> <h2>" + "Home price here" + "</h2>");

    }
  }).addTo(map);
});

var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4><strong>Sale Price by Ward</strong></h4>";
  div.innerHTML += '<i style="background: #b10026"></i><span>High Sale Price</span><br>';
  div.innerHTML += '<i style="background: #e31a1c"></i><span></span><br>';
  div.innerHTML += '<i style="background: #fc4e2a"></i><span></span><br>';
  div.innerHTML += '<i style="background: #fd8d3c"></i><span></span><br>';
  div.innerHTML += '<i style="background: #feb24c"></i><span></span><br>';
  div.innerHTML += '<i style="background: #fed976"></i><span></span><br>';
  div.innerHTML += '<i style="background: #ffeda0"></i><span></span><br>';
  div.innerHTML += '<i style="background: #ffffcc"></i><span>Low Sale Price</span><br>';
 
  return div;
};

legend.addTo(map);




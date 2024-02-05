//The following code was developed with the assistance of tutors Sandhya Kumari (map creation and tectonic plate additions), Mark Fullton (pop ups and markers), and David Chao (legend creation and legend formatting)

let URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson"

d3.json(URL).then(function (data){
    console.log(data)
    createFeatures(data)
});
    function createFeatures(earthquakedata){
        function onEachFeature(feature, layer){
            layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}</p><hr><p>Depth: ${feature.geometry.coordinates[2]}`)
        }

        let earthquakes = L.geoJSON(earthquakedata, {
            onEachFeature : onEachFeature,
            pointToLayer: function(feature_data, lat_lon){
                let color;
                let depth = feature_data.geometry.coordinates[2]
                if (depth>=90){
                    color = "#ea2c2c"
                }
                else if (depth>=70){
                    color = "#ea822c"
                }
                else if (depth>=50){
                    color = "#ee9c00"
                }
                else if (depth>=30){
                    color = "#eecc00"
                }
                else if (depth>=10){
                    color = "#d4ee00"
                }
                else {
                    color = "#98ee00"
                }
                let magnitude = feature_data.properties.mag
                return L.circleMarker(lat_lon, {
                    fillColor: color,
                    fillOpacity: "0.7",
                    color: color,
                    radius: magnitude*3
                })
            }
        })
        createMap(earthquakes);
  
}

function createMap(earthquakes){
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })

    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      });    
    let tectonic_plates = new L.layerGroup()

    let map = L.map("map", {
        center: [40, 90],
        zoom: 2,
        layers: [street, earthquakes]
    })
    let baseMaps = {
        "Street Map": street,
        "Topographic Map": topo
      };
    
    let overlayMaps = {
        Earthquakes: earthquakes, 
        tectonic_plates : tectonic_plates};

    //adding tectonic layer to the map
    d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function (tectonic_data){
            L.geoJson(tectonic_data, {
                color: "Orange"
            }).addTo(tectonic_plates)
            tectonic_plates.addTo(map)
        })
        
        // "Tectonic Plates" : tectonic_plates}
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: true
      }).addTo(map);


//Creating a legend control object. This code was developed with the assistance of David Chao
let legend = L.control({
    position: "bottomright"
  });

  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");

    let depth = [-10, 10, 30, 50, 70, 90];
    let colors = ["#98ee00", "#d4ee00", "#eecc00", "#ee9c00", "#ea822c", "#ea2c2c"];

    // Loop through our intervals and generate a  label with a colored square for each interval.
    for (let i = 0; i < depth.length; i++) {
      div.innerHTML += "<i style='background: "
        + colors[i]
        + "'></i> "
        + depth[i]
        + (depth[i + 1] ? "&ndash;" + depth[i + 1] + "<br>" : "+");
    }
    return div;
  }; legend.addTo(map)
}



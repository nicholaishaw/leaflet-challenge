# Data Analysis Using Javascript and Leaflet

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

In this fictional challenge, the USGS is interested in building a new set of tools to allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. I have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Earthquake Visualization
My first task was to visualize an earthquake dataset. To do so, I located the data source, used the D3 library to import the data, and created the map using javascript:

**Data Source.** The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I visited the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose the +1.0 magnitude earthquakes in the past day to visualize. The following image the website where the data were extracted:

![image](https://github.com/nicholaishaw/leaflet-challenge/assets/135463220/2cb002a4-4f97-4e2a-8e70-e20eb0e4f770)

**Figure 1.** *The United States Geological Survey GeoJSON website.*
___

**Raw Data.** The data from the USGS website are in JSON format; the URL of the JSON file will be used to as the source to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

![image](https://github.com/nicholaishaw/leaflet-challenge/assets/135463220/230524c1-30ea-4089-8ad2-02dfc6a7c022)

**Figure 2.** *Raw JSON data. This dataset contains the features of each earthquake including its magnitude, frequency, time, latitude, and longitude*
___

**Map Creation.** I Imported and visualized the data by doing the following using Javascript code and an HTML index:

* Using the Leaflet library, I created a map that plots all the earthquakes from the USGS dataset based on their longitude and latitude.
    * My data markers should reflected the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color.
* Included popups that provide additional information about the earthquake when its associated marker is clicked.
* Created a legend that will provide context for your map data.
* Ploted the tectonic plates dataset on the map in addition to the earthquakes.
* Put each dataset into separate overlays at the top of the map that can be turned on and off independently.
* Added layer controls to your map.

![image](https://github.com/nicholaishaw/leaflet-challenge/assets/135463220/23fe6dfb-e21a-495e-96db-4cc34be20c38)

**Figure 3.** *Finished street map displaying the tectonic plates in orange and earthquakes with the size and color reflecting the magnitudes and depth respectively.*

![image](https://github.com/nicholaishaw/leaflet-challenge/assets/135463220/1f7c3c13-713c-46ca-95d3-28d58b1d7776)

**Figure 4.** *Finished topographic map displaying the earthquakes with the size and color reflecting the magnitudes and depth respectively.*

# Data Analysis Using Javascript and Leaflet

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

In this fictional challenge, the USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. I have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Repository Layout
This activity is broken into two parts:<br>
Part 1: Create the Earthquake Visualization<br>
Part 2: Gather and Plot More Data

## Part 1: Create the Earthquake Visualization
Your first task is to visualize an earthquake dataset. Complete the following steps:

Get your dataset. To do so, follow these steps:

1. The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

![image](https://github.com/nicholaishaw/leaflet-challenge/assets/135463220/2cb002a4-4f97-4e2a-8e70-e20eb0e4f770)

**Figure 1.** *The GeoJSON data source—the United States Geological Survey GeoJSON website.*

2. When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

![image](https://github.com/nicholaishaw/leaflet-challenge/assets/135463220/230524c1-30ea-4089-8ad2-02dfc6a7c022)

**Figure 2.** *Raw JSON data. This dataset contains the features of each earthquake including its magnitude, frequency, time, latitude, and longitude*

3. Import and visualize the data by doing the following:

* Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
    * Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
* Include popups that provide additional information about the earthquake when its associated marker is clicked.
* Create a legend that will provide context for your map data.
* Your visualization should look something like the preceding map.

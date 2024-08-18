import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3"; // Ensure correct import path
import "leaflet/dist/leaflet.css";
import FloatingNavBar from "./FloatingNavBar"; 
import { Detail } from "./detail";

const center = [20.536846, 76.180870];
const points = [
  { lat: 20.536846, lng: 76.180870, intensity: 0.5 },
  { lat: 20.546846, lng: 76.190870, intensity: 0.8 },
  { lat: 20.526846, lng: 76.170870, intensity: 0.4 },
  { lat: 20.536846, lng: 76.190870, intensity: 1.0 },
  // Add more points here
];

const heatmapData = {
  positions: points,
  options: {
    radius: 20, // Radius of each "point" of the heatmap
    blur: 10,   // Amount of blur to apply to the heatmap
    maxZoom: 17,
    gradient: {
      0.0: '#0000FF',  // Blue for lowest intensity
      0.25: '#008000', // Green for low-medium intensity
      0.5: '#FFFF00',  // Yellow for medium intensity
      0.75: '#FFA500', // Orange for high-medium intensity
      1.0: '#FF0000'   // Red for highest intensity
    },
  },
};

const Map = () => (
  <div className="relative w-full h-screen">
    <FloatingNavBar />
    <MapContainer center={center} zoom={13} className="w-full h-full"  zoomControl={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HeatmapLayer
        points={heatmapData.positions}
        latitudeExtractor={(point) => point.lat}
        longitudeExtractor={(point) => point.lng}
        intensityExtractor={(point) => point.intensity}
        radius={heatmapData.options.radius}
        blur={heatmapData.options.blur}
        maxZoom={heatmapData.options.maxZoom}
        gradient={heatmapData.options.gradient}
      />

    </MapContainer>
    <Detail/>
  </div>
);

export default Map;

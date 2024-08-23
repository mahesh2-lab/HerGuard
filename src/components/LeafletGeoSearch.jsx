import React, { useState, useCallback, useEffect } from "react";
import { useMap } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";
import FloatingNavBar from "./FloatingNavBar";

import {seachicon} from './hoem.js';

function LeafletGeoSearch({ onSearchResult }) {
  const map = useMap();
  const provider = new OpenStreetMapProvider();
  const [marker, setMarker] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = useCallback(
    async (query) => {
      try {
        const results = await provider.search({ query });
       if (results.length) {
          const [result] = results;
          const newCenter = [result.y, result.x];
          map.flyTo(newCenter, 13);

          if (marker) {
            map.removeLayer(marker);
          }

          const newMarker = L.marker(newCenter, { seachicon }).addTo(map);
          newMarker.bindPopup(result.label).openPopup();
          setMarker(newMarker);

          onSearchResult(newCenter);
        } else {
          alert("No results found for the specified location. Please try again.");
        }
      } catch (error) {
        alert("An error occurred during the search. Please try again.");
      }
    },
    [map, marker, provider, onSearchResult]
  );

  const fetchSuggestions = useCallback(
    async (query) => {
      if (query.trim() === "") {
        setSuggestions([]);
        return;
      }
      try {
        const results = await provider.search({ query });
        setSuggestions(results.map((result) => result.label));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    },
    [provider]
  );

  return (
    <FloatingNavBar onSearch={handleSearch} suggestions={suggestions} fetchSuggestions={fetchSuggestions} />
  );
}

export default LeafletGeoSearch;

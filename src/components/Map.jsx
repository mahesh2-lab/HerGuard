import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import "leaflet/dist/leaflet.css";
import { Detail } from "./detail"; // Assuming this is a component
import L from "leaflet";
import useGeoLocation from "../hooks/useGeolocation";
import { customIcon } from "./hoem";
import LeafletGeoSearch from "./LeafletGeoSearch";
import ReportLocationForm from "./ReportLocationForm";
import CenterButton from "./CenterBtn";
import usereport from "../hooks/useReport";
import useGetHeatmap from "../hooks/useGetHeatmap";
import icon from "./icon";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";

const defaultCenter = [20.536846, 76.18087];

const heatmapOptions = {
  radius: 20,
  blur: 10,
  maxZoom: 17,
  gradient: {
    0.0: "#0000FF",
    0.25: "#008000",
    0.5: "#FFFF00",
    0.75: "#FFA500",
    1.0: "#FF0000",
  },
};
const getStatus = (intensity) => {
  if (intensity <= 1) return "Very Safe";
  if (intensity <= 2) return "Safe";
  if (intensity <= 3) return "Moderate";
  if (intensity <= 4) return "Unsafe";
  return "Very Unsafe";
};
function LocationMarker() {
  const location = useGeoLocation();
  const map = useMap();

  useEffect(() => {
    if (!location.loaded) return;

    if (location.permission === "denied") {
      toast.error("Please enable location services.");
    } else if (location.permission === "unsupported") {
      toast.error("Location services are not supported by your browser.");
    } else if (location.error) {
      toast.error("Error:", location.error.message);
    } else {
      const newPosition = [location.coordinates.lat, location.coordinates.lng];
      map.flyTo(newPosition, 13);

      L.marker(newPosition, { icon: customIcon })
        .addTo(map)
        .bindPopup("You are here.")
        .openPopup();
    }
  }, [map, location]);

  return null;
}

const Map = () => {
  const [reportedLocations, setReportedLocations] = useState([]);
  const [formLocation, setFormLocation] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const [reporting, setReporting] = useState(false);
  const { load, SendReport } = usereport();
  const {loading,  heatdata } = useGetHeatmap();
  const location = useGeoLocation();

  if (location.permission === "denied") {
    toast.error("Please enable location services.");
  } else if (location.permission === "unsupported") {
    toast.error("Location services are not supported by your browser.");
  } else if (location.error) {
    toast.error("Error:", location.error.message);
  } 
    const initialCenter = [location.coordinates.lat, location.coordinates.lng];
  
  const toggleReporting = () => {
    setReporting(!reporting);

    setPosition(null);
  };

  const MapClickHandler = () => {
    if (reporting === true) {
      useMapEvents({
        click: (e) => {
          setFormLocation(e.latlng); // Store click ed location
          setIsDialogOpen(true); // Open the dialog
          setPosition(e.latlng);
        },
      });
    }

    return null;
  };
  const handleFormSubmit = async (formData) => {
    await SendReport([
      { lat: formLocation.lat, lng: formLocation.lng, ...formData },
    ]);
    setReportedLocations([
      ...reportedLocations,
      { lat: formLocation.lat, lng: formLocation.lng, ...formData },
    ]);
    setFormLocation(null);
    setIsDialogOpen(false);
    setReporting(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!loading) {
       
       await setReportedLocations(heatdata.map((data) => ({
          lat: data.lat,
          lng: data.lng,
          intensity: data.intensity,
          name: data.name,
          type: data.type,
          description: data.description,
        })));
      }
    };

    fetchData();
  }, [loading, heatdata]);

  return (
    <div className="relative w-full h-screen">
      
        <MapContainer
          center={initialCenter}
          zoom={13}
          minZoom={6}
          className="w-full h-full"
          zoomControl={true}
          preferCanvas={true} // Use Canvas renderer for performance
        >
          <LeafletGeoSearch
            onSearchResult={(newCenter) => {
              // Handle any additional logic when a new location is found
            }}
            onReportLocation={toggleReporting}
          />
          {loading ? (
        <div className=" flex justify-center h-full items-center">
          <Spinner color="blue" size="large" className="h-14 w-14"/>
        </div>
      ) : (
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19} // Set a reasonable maxZoom for performance
          />
          <HeatmapLayer
            points={reportedLocations}
            latitudeExtractor={(point) => point.lat}
            longitudeExtractor={(point) => point.lng}
            intensityExtractor={(point) => point.intensity}
            radius={heatmapOptions.radius}
            blur={heatmapOptions.blur}
            maxZoom={heatmapOptions.maxZoom}
            gradient={heatmapOptions.gradient}
          />
          <MapClickHandler />
          {reportedLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]} icon={icon}>
              <Popup>
                <strong>{location.name}</strong>
                <br />
                Type: {location.type}
                <br />
                Description: {location.description}
                <br />
                Status: {getStatus(location.intensity)}
              </Popup>
            </Marker>
          ))}
          <LocationMarker />
          </>
          )}
          <CenterButton
            center={initialCenter}
            zoom={13}
            tooglereport={toggleReporting}
            bgColor={reporting}
          />

          
        </MapContainer> 
      

      {formLocation && (
        <ReportLocationForm
          open={isDialogOpen}
          onClose={() => {setIsDialogOpen(false) 
            setReporting(false)}}
          onSubmit={handleFormSubmit}
          position={position}
        />
      )}
    </div>
  );
};

export default Map;

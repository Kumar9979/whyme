import React, { useEffect, useState } from "react";
import { usePosition } from "../../pages/post-property/property-details/usePosition";
import styles from "../../styles/modals/apartmentUpdateMap.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "../../pages/post-property/property-details/placesAutocomplete";
import Geocode from "react-geocode";

const PropertyLocation = () => {
  const libraries = ["places"];
  const { latitude: lat, longitude: lng, error } = usePosition();
  const [currentPage, setCurrentPage] = useState("propertyDetails");

  const [zoom, setZoom] = useState(10);
  const [markedAddress, setMarkedAddress] = useState("");

  const [selected, setSelected] = useState();
  const [map, setMap] = useState(null);
  const [markerStat, setmarkerStat] = useState(false);
  console.log(lat, lng);
  useEffect(() => {
    setSelected({ lat, lng });
    if (lat !== undefined) {
      const timer = setTimeout(() => {
        markerSetOn();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [lat, lng]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU",
    libraries,
  });
  function markerSetOn() {
    setmarkerStat(true);
  }

  Geocode.setApiKey("AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU");

  function markerChange() {
    Geocode.fromLatLng(selected.lat, selected.lng).then(
      (response) => {
        setMarkedAddress(response.results[0].formatted_address);
        console.log(markedAddress);
      },

      (error) => {
        console.error(error);
      }
    );
  }
  return (
  
        <div className="col-12 position-relative">
          {isLoaded ? (
            <>
              <div>
                <PlacesAutocomplete
                  markerSetOn={markerSetOn}
                  markedAddress={markedAddress} 
                  setSelected={setSelected}
                />
              </div>
              <div className="mt-3">
                <GoogleMap
                  zoom={16}
                  center={selected}
                  mapContainerClassName={`${styles.map_container}`}
                  onLoad={(map) => {
                    setMap(map);
                  }}
                  
                >
                  {markerStat && (
                    <Marker
                      draggable={true}
                      onDragEnd={(e) => {
                        markerChange();
                        setSelected({
                          lat: e.latLng.lat(),
                          lng: e.latLng.lng(),
                        });
                      }}
                      position={selected}
                    />
                  )}
                </GoogleMap>
              </div>
            </>
          ) : (
            <p>Map Loading</p>
          )}
        </div>
 
  );
};

export default PropertyLocation;
